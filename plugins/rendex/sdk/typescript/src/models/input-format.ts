import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How to interpret `content`. 'markdown' is converted to styled HTML; 'html' is used as a body
 * fragment.
 */
export const InputFormat = {
  Markdown: "markdown",
  Html: "html",
} as const;
export type InputFormat = (typeof InputFormat)[keyof typeof InputFormat] | (string & {});

export const inputFormatSchema: EnumSchema<InputFormat> = s.enumOf<InputFormat>(InputFormat);
