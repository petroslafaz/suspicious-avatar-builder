import React, { useState, createContext, useContext } from "react";
import {
  ColorLibrary,
  AvatarBuilderSchema,
  AvatarSelectionState,
  AvatarPartType
} from "../types";
import { colorLibrary } from "./colorLibrary";
import { avatarBuilderSchema } from "./avatarBuilderSchema";

export type AvatarContextType = {
  colorLibrary: ColorLibrary;
  avatarBuilderSchema: AvatarBuilderSchema;
  avatarSelection: AvatarSelectionState;
  setAvatarPartColor: (part: AvatarPartType, color: string) => void;
  setAvatarPart: (category: AvatarPartType, part: string) => void;

  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: AvatarPartType;
  setSelectedCategory: React.Dispatch<React.SetStateAction<AvatarPartType>>;
  selectedPart: string;
  setSelectedPart: React.Dispatch<React.SetStateAction<string>>;
};

export type AvatarProps = {
  avatarContext: AvatarContextType;
};

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

type AvatarProviderProps = {
  children: React.ReactNode;
};

const initialAvatarSelectionState: AvatarSelectionState = {
  skin: { selectedPart: "skin", color: "muddy" },
  hair: { selectedPart: "short", color: "orange" },
  bottoms: { selectedPart: "trousers", color: "blueish" },
  tops: { selectedPart: "t-shirt", color: "avocado" },
  footwear: { selectedPart: "sneakers", color: "cyan" }
};

export const AvatarProvider: React.FC<AvatarProviderProps> = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState("body");
  const [selectedCategory, setSelectedCategory] = useState<AvatarPartType>(
    "skin"
  );
  const [selectedPart, setSelectedPart] = useState("skin");

  const [avatarSelection, setAvatarSelection] = useState(
    initialAvatarSelectionState
  );

  const setAvatarPart = (category: AvatarPartType, selectedPart: string) => {
    setAvatarSelection((prev) => ({
      ...prev,
      [category]: { ...prev[category], selectedPart }
    }));
  };

  const setAvatarPartColor = (category: AvatarPartType, color: string) => {
    setAvatarSelection((prev) => ({
      ...prev,
      [category]: { ...prev[category], color }
    }));
  };

  return (
    <AvatarContext.Provider
      value={{
        colorLibrary,
        selectedSection,
        setSelectedSection,
        selectedCategory,
        setSelectedCategory,
        selectedPart,
        setSelectedPart,
        avatarBuilderSchema,
        avatarSelection,
        setAvatarPart,
        setAvatarPartColor
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = (): AvatarContextType => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatar must be used within AvatarProvider");
  }
  return context;
};
