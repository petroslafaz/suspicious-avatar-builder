import { useAvatar, AvatarProps } from "../../context/AvatarContext";
import * as Parts from "./AvatarParts";

const EmptyComponent: React.FC = () => {
  return null;
};

const MainBody = ({ avatarContext }: AvatarProps) => {
  return (
    <>
      <Parts.Body avatarContext={avatarContext} />
      <Parts.Head avatarContext={avatarContext} />
      <Parts.Hands avatarContext={avatarContext} />
    </>
  );
};

const mapping = {
  haircuts: {
    short: {
      back: Parts.BackShortHair,
      front: Parts.FrontShortHair
    },
    long: {
      back: Parts.BackLongHair,
      front: Parts.FrontLongHair
    }
  },
  bottoms: {
    trousers: Parts.Trousers,
    skirt: Parts.Skirt
  },
  tops: {
    shirt: {
      back: Parts.BackShirt,
      front: Parts.FrontShirt
    },
    "t-shirt": {
      front: Parts.Tshirt,
      back: EmptyComponent
    }
  }
};
const Avatar = () => {
  const avatarContext = useAvatar();
  const { avatarSelection } = avatarContext;

  const selectedHaircut = avatarSelection.hair
    .selectedPart as keyof typeof mapping.haircuts;
  const selectedBottoms = avatarSelection.bottoms
    .selectedPart as keyof typeof mapping.bottoms;
  const selectedTops = avatarSelection.tops
    .selectedPart as keyof typeof mapping.tops;

  // Get the components for the back and front layers of the selected haircut
  const BackHairComponent = mapping.haircuts[selectedHaircut].back;
  const FrontHairComponent = mapping.haircuts[selectedHaircut].front;
  const BottomsComponent = mapping.bottoms[selectedBottoms];
  const BackTopsComponent = mapping.tops[selectedTops].back;
  const FrontTopsComponent = mapping.tops[selectedTops].front;

  return (
    <svg
      width="420"
      height="660" //820
      viewBox="0 0 420 820"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <BackHairComponent avatarContext={avatarContext} />
      <BackTopsComponent avatarContext={avatarContext} />
      <MainBody avatarContext={avatarContext} />
      <BottomsComponent avatarContext={avatarContext} />
      <FrontTopsComponent avatarContext={avatarContext} />
      <Parts.Shoes avatarContext={avatarContext} />
      <FrontHairComponent avatarContext={avatarContext} />
    </svg>
  );
};
export default Avatar;
