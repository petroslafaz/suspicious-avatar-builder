import { AvatarProps } from "../../context/AvatarContext";
import { ShadeType, AvatarPartType } from "../../types";

const getColor = (
  avatarProps: AvatarProps,
  type: AvatarPartType,
  shade: ShadeType
) => {
  const { avatarSelection, colorLibrary } = avatarProps.avatarContext;
  const color = avatarSelection[type].color;
  const fill = colorLibrary?.[color]?.[shade] || colorLibrary?.[color].primary;
  return fill;
};

export const Shoes = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "footwear", "primary");
  return (
    <g>
      <path
        d="M235 730H279C287.837 730 295 737.163 295 746V761H235V730Z"
        fill={fill}
      />
      <path
        d="M136 746C136 737.163 143.163 730 152 730H196V761H136V746Z"
        fill={fill}
      />
    </g>
  );
};
export const Tshirt = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "tops", "primary");
  return (
    <g>
      <rect x="112" y="269" width="194" height="251" fill={fill} />
      <rect
        width="152.224"
        height="35.4766"
        transform="matrix(0.266405 0.963861 -0.964885 0.262675 307.447 269)"
        fill={fill}
      />
      <rect
        width="154.561"
        height="35.4766"
        transform="matrix(-0.266405 0.963861 0.964885 0.262675 112.177 269)"
        fill={fill}
      />
    </g>
  );
};
export const Trousers = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "bottoms", "primary");

  return (
    <g>
      <path d="M158 520H195L201 701.5H150L158 520Z" fill={fill} />
      <path d="M236 520H273L279 701.5H228L236 520Z" fill={fill} />
    </g>
  );
};

export const Skirt = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "bottoms", "primary");

  return <path d="M129 482H294L323.5 597.5H100L129 482Z" fill={fill} />;
};

export const BackLongHair = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "hair", "tertiary");

  return (
    <path
      d="M97 76C97 71.5817 100.582 68 105 68H312C316.418 68 320 71.5817 320 76V458C320 462.418 316.418 466 312 466H105C100.582 466 97 462.418 97 458V76Z"
      fill={fill}
    />
  );
};

export const FrontLongHair = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "hair", "primary");
  return (
    <path
      d="M97 76C97 71.5817 100.582 68 105 68H312C316.418 68 320 71.5817 320 76V115L97 137V76Z"
      fill={fill}
    />
  );
};

export const BackShortHair = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "hair", "tertiary");
  return (
    <path
      d="M97.8851 76.8006C97.4113 72.0895 101.11 68 105.845 68H311.205C315.922 68 319.615 72.0597 319.17 76.7552L304.907 227.158C304.399 232.515 297.614 234.508 294.289 230.277V230.277C293.16 228.84 291.432 228 289.604 228H130.089C128.124 228 126.252 228.838 124.943 230.304V230.304C120.945 234.782 113.532 232.372 112.931 226.4L97.8851 76.8006Z"
      fill={fill}
    />
  );
};

export const FrontShortHair = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "hair", "primary");

  return (
    <path
      d="M97 76C97 71.5817 100.582 68 105 68H312C316.418 68 320 71.5817 320 76V122.5L262.535 108.013C261.201 107.677 259.802 107.69 258.475 108.052L207.605 121.926C206.227 122.302 204.773 122.302 203.395 121.926L152.634 108.082C151.238 107.701 149.764 107.706 148.37 108.097L97 122.5V76Z"
      fill={fill}
    />
  );
};
export const Body = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "skin", "primary");
  return (
    <g>
      {/* Neck */}
      <rect x="189" y="221" width="43" height="51" fill={fill} />
      <rect x="189" y="221" width="43" height="8" fill="#EF8974" />

      {/* Torso */}
      <rect x="112" y="269" width="194" height="251" fill={fill} />
      <rect x="158" y="520" width="37" height="210" fill={fill} />
      <rect x="235" y="520" width="38" height="210" fill={fill} />
    </g>
  );
};

export const Head = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "skin", "primary");

  return (
    <g>
      {/* Head */}
      <rect x="127" y="93" width="166" height="128" rx="40" fill={fill} />
      {/* Eyes */}
      <circle cx="243" cy="144" r="10" fill="black" />
      <circle cx="177" cy="144" r="10" fill="black" />
      {/* Ears */}
      <ellipse cx="293" cy="160.5" rx="8" ry="9.5" fill={fill} />
      <ellipse cx="126" cy="160.5" rx="8" ry="9.5" fill={fill} />
      {/* Nose */}
      <path d="M210 146L224.722 170.75H195.278L210 146Z" fill="black" />
      {/* Mouth */}
      <path
        d="M182 189C193.687 200.167 227 199 238 189.859"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Eyebrows */}
      <rect x="230" y="123" width="25" height="8" fill="black" />
      <rect x="164" y="123" width="25" height="8" fill="black" />
    </g>
  );
};
export const Hands = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "skin", "primary");
  return (
    <g>
      <ellipse cx="347.5" cy="488.5" rx="21.5" ry="22.5" fill={fill} />
      <rect
        x="273.974"
        y="278"
        width="34.4106"
        height="208.22"
        transform="rotate(-15 273.974 278)"
        fill={fill}
      />
      <ellipse cx="70.5" cy="488.5" rx="21.5" ry="22.5" fill={fill} />
      <rect
        x="112.291"
        y="269"
        width="34.4106"
        height="210.362"
        transform="rotate(15 112.291 269)"
        fill={fill}
      />
    </g>
  );
};

export const BackShirt = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "tops", "tertiary");

  return (
    <path
      d="M167 253C167 251.895 167.895 251 169 251H252C253.105 251 254 251.895 254 253V269H167V253Z"
      fill={fill}
    />
  );
};
export const FrontShirt = (avatarProps: AvatarProps) => {
  const fill = getColor(avatarProps, "tops", "primary");
  return (
    <g>
      <path
        d="M112 269H167V253L189.5 278H232L254 253V269H306V520H112V269Z"
        fill={fill}
      />
      <rect
        width="152.224"
        height="35.4766"
        transform="matrix(0.266405 0.963861 -0.964885 0.262675 307.447 269)"
        fill={fill}
      />
      <rect
        width="154.561"
        height="35.4766"
        transform="matrix(-0.266405 0.963861 0.964885 0.262675 112.177 269)"
        fill={fill}
      />
    </g>
  );
};
