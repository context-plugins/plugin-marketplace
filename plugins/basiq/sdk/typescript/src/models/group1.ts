import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details the code and title of the merchant ANZSIC group. */
export type Group1 = {
  code?: string;
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const group1Schema: Schema<Group1> = s.object<Group1>(
  {
    code: s.optional(s.string()),
    title: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
