import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1 = {
  removed?: number;
  invalidIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1Schema: Schema<Data1> = s.object<Data1>(
  {
    removed: s.optional(s.int()),
    invalidIds: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
