import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type11, type11Schema } from "./type11.js";

export type CardSchemeDefinition = {
  /** Always `card-scheme-definition`. @default Type11.CardSchemeDefinition */
  type?: Type11;
  /** The ID for the card scheme. */
  id: string;
  /** The icon for this card scheme. */
  iconUrl: string;
  /** The display name of this card scheme. */
  displayName: string;
};

export const cardSchemeDefinitionSchema: Schema<CardSchemeDefinition> = s.object<CardSchemeDefinition>({
  type: s.defaulted(type11Schema, Type11.CardSchemeDefinition),
  id: s.string(),
  iconUrl: s.string(),
  displayName: s.string(),
  _keysMap: {
    iconUrl: "icon_url",
    displayName: "display_name",
  },
});
