import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Identity1 = {
  /** Identity name */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identity1Schema: Schema<Identity1> = s.object<Identity1>(
  {
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
