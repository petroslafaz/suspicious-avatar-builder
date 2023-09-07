import { AvatarBuilderSchema } from "../types";

export const avatarBuilderSchema: AvatarBuilderSchema = {
  sections: {
    body: {
      categories: {
        skin: {
          parts: ["skin"],
          palette: ["muddy", "brandy", "coffee"]
        },
        hair: {
          parts: ["short", "long"],
          palette: ["orange", "brown", "yellow"]
        }
      }
    },
    clothes: {
      categories: {
        bottoms: {
          parts: ["trousers", "skirt"],
          palette: ["blueish", "sunset", "pink"]
        },
        tops: {
          parts: ["t-shirt", "shirt"],
          palette: ["avocado", "purple", "cyan"]
        },
        footwear: {
          parts: ["sneakers"],
          palette: ["cyan", "blue", "silver"]
        }
      }
    }
  }
};
