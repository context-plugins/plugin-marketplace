import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchemeDefinitionSchema, type CardSchemeDefinition } from "./card-scheme-definition.js";

export type CardSchemeDefinitions = {
  /** A list of items returned for this request. */
  items: CardSchemeDefinition[];
};

export const cardSchemeDefinitionsSchema: Schema<CardSchemeDefinitions> = s.object<CardSchemeDefinitions>({
  items: s.array(s.lazy(() => cardSchemeDefinitionSchema)),
});
