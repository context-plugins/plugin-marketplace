import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1 = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1Schema: Schema<Data1> = s.object<Data1>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
