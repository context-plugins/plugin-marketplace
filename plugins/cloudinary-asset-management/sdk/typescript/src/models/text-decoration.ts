import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Text decoration style. */
export const TextDecoration = {
  None: "none",
  Underline: "underline",
} as const;
export type TextDecoration = (typeof TextDecoration)[keyof typeof TextDecoration] | (string & {});

export const textDecorationSchema: EnumSchema<TextDecoration> = s.enumOf<TextDecoration>(TextDecoration);
