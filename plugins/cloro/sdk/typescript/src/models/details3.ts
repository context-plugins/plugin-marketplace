import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Details3 = {
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const details3Schema: Schema<Details3> = s.object<Details3>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
