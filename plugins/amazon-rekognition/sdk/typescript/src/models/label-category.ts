import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LabelCategory = {
  /** The name of a category that applies to a given label. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelCategorySchema: Schema<LabelCategory> = s.object<LabelCategory>(
  {
    name: s.optional(s.string()),
    _keysMap: {
      name: "Name",
    },
  },
  { additionalProperties: s.json() },
);
