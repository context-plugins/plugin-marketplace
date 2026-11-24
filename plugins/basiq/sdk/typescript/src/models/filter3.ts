import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Filter3 = {
  name?: string;
  type?: string;
  required?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filter3Schema: Schema<Filter3> = s.object<Filter3>(
  {
    name: s.optional(s.string()),
    type: s.optional(s.string()),
    required: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
