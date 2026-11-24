import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how the text in an input file should be processed. This is optional, and the default is
 * ONE_DOC_PER_LINE. ONE_DOC_PER_FILE - Each file is considered a separate document. Use this option
 * when you are processing large documents, such as newspaper articles or scientific papers.
 * ONE_DOC_PER_LINE - Each line in a file is considered a separate document. Use this option when
 * you are processing many short documents, such as text messages.
 */
export const InputFormat = {
  OneDocPerFile: "ONE_DOC_PER_FILE",
  OneDocPerLine: "ONE_DOC_PER_LINE",
} as const;
export type InputFormat = (typeof InputFormat)[keyof typeof InputFormat] | (string & {});

export const inputFormatSchema: EnumSchema<InputFormat> = s.enumOf<InputFormat>(InputFormat);
