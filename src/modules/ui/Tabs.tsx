import React from "react";
import { useAvatar } from "../../context/AvatarContext";
import { AvatarPartType } from "../../types";

const SELECTED_STYLE = "2px solid black";
const STYLE = "2px solid white";
const Tabs: React.FC = () => {
  const {
    selectedSection,
    setSelectedSection,
    selectedCategory,
    setSelectedCategory,
    selectedPart,
    setSelectedPart,
    avatarBuilderSchema,
    avatarSelection,
    setAvatarPart
  } = useAvatar();

  const { sections } = avatarBuilderSchema;
  const { categories } = sections[selectedSection];
  const { parts } = sections[selectedSection].categories[selectedCategory];

  const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
    const firstCategory = Object.keys(
      sections[section].categories
    )[0] as AvatarPartType;
    setSelectedCategory(firstCategory);
    const part = avatarSelection[firstCategory]
      ? avatarSelection[firstCategory].selectedPart
      : sections[section].categories[firstCategory].parts[0];
    setSelectedPart(part);
  };

  const handleCategorySelect = (category: AvatarPartType) => {
    setSelectedCategory(category);
    const part = avatarSelection[category]
      ? avatarSelection[category].selectedPart
      : sections[selectedSection].categories[category].parts[0];

    setSelectedPart(part);
  };

  const handlePartSelect = (category: AvatarPartType, part: string) => {
    setSelectedPart(part);
    setAvatarPart(category, part);
  };

  return (
    <div>
      {/* Sections */}
      <div>
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => handleSectionSelect(section)}
            style={{
              border: selectedSection === section ? SELECTED_STYLE : STYLE
            }}
          >
            {section}
          </button>
        ))}
      </div>
      {/* Categories */}
      <div>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category as AvatarPartType)}
            style={{
              border: selectedCategory === category ? SELECTED_STYLE : STYLE
            }}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Parts */}
      <div>
        {parts.map((part) => (
          <button
            key={part}
            onClick={() => handlePartSelect(selectedCategory, part)}
            style={{
              border: selectedPart === part ? SELECTED_STYLE : STYLE
            }}
          >
            {part}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
