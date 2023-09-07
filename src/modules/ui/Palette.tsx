import React from "react";
import { useAvatar } from "../../context/AvatarContext";

const Palette: React.FC = () => {
  const {
    setAvatarPartColor,
    selectedSection,
    selectedCategory,
    colorLibrary,
    avatarBuilderSchema
  } = useAvatar();

  const changeColor = (newColor: string) => {
    setAvatarPartColor(selectedCategory, newColor);
  };

  const colors =
    avatarBuilderSchema.sections[selectedSection].categories[selectedCategory]
      .palette;

  return (
    <div className="Palette">
      {colors.map((color, i) => (
        <button
          key={i}
          style={{
            backgroundColor: colorLibrary[color].primary
          }}
          onClick={() => changeColor(color)}
          title={color} // Tooltip with hex value
        />
      ))}
    </div>
  );
};

export default Palette;
