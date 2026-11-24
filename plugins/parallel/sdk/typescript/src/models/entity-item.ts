import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityItem = {
  /** Entity name. */
  name: string;
  /** Canonical URL for the entity. */
  url: string;
  /** Descriptive text about the entity. */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityItemSchema: Schema<EntityItem> = s.object<EntityItem>(
  {
    name: s.string(),
    url: s.string(),
    description: s.string(),
  },
  { additionalProperties: s.json() },
);
