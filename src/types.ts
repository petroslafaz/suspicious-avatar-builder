export type ColorShades = {
  primary: string;
  secondary: string;
  tertiary: string;
};

export type ShadeType = keyof ColorShades;

export type AvatarPartType = "hair" | "tops" | "bottoms" | "footwear" | "skin";

export type AvatarSelectionState = {
  [category in AvatarPartType]: {
    selectedPart: string;
    color: string;
  };
};

export type ColorLibrary = {
  [colorName: string]: ColorShades;
};

export type AvatarBuilderSchema = {
  sections: {
    [section: string]: {
      categories: {
        [category: string]: {
          parts: string[];
          palette: string[];
        };
      };
    };
  };
};
