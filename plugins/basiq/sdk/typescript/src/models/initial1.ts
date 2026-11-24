import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Initial1 = {
  created?: number;
  deleted?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const initial1Schema: Schema<Initial1> = s.object<Initial1>(
  {
    created: s.optional(s.int()),
    deleted: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
