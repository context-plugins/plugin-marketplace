import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to format events before sending. Defaults to JSON. Plaintext is not currently supported. */
export const Format10 = {
  JsonArray: "json_array",
  Plaintext: "plaintext",
} as const;
export type Format10 = (typeof Format10)[keyof typeof Format10] | (string & {});

export const format10Schema: EnumSchema<Format10> = s.enumOf<Format10>(Format10);
