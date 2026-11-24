import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how the text in an input file should be processed: ONE_DOC_PER_FILE - Each file is
 * considered a separate document. Use this option when you are processing large documents, such as
 * newspaper articles or scientific papers. ONE_DOC_PER_LINE - Each line in a file is considered a
 * separate document. Use this option when you are processing many short documents, such as text
 * messages.
 */
export const InputFormat2 = {
  OneDocPerFile: "ONE_DOC_PER_FILE",
  OneDocPerLine: "ONE_DOC_PER_LINE",
} as const;
export type InputFormat2 = (typeof InputFormat2)[keyof typeof InputFormat2] | (string & {});

export const inputFormat2Schema: EnumSchema<InputFormat2> = s.enumOf<InputFormat2>(InputFormat2);
