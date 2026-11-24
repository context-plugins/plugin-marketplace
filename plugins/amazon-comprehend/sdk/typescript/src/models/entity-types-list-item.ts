import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityTypesListItem = {
  /**
   * An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom
   * entity recognizer. Entity types must not contain the following invalid characters: \n (line
   * break), \\n (escaped line break, \r (carriage return), \\r (escaped carriage return), \t (tab),
   * \\t (escaped tab), and , (comma).
   */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityTypesListItemSchema: Schema<EntityTypesListItem> = s.object<EntityTypesListItem>(
  {
    type: s.string(),
    _keysMap: {
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
