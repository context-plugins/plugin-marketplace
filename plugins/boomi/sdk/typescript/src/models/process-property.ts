import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProcessProperty = {
  /** Property name. */
  name?: string;
  /** Property value. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processPropertySchema: Schema<ProcessProperty> = s.object<ProcessProperty>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
