import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseFormatRegex = {
  /** The type of the response format: `regex`. @default "regex" */
  type?: "regex";
  /**
   * The schema of the output. Lookaheads or lookbehinds (e.g., `\a`, `\z`, `^`, `$`, `(?=)`,
   * `(?!)`, `(?<=...)`, `(?<!...)`) are not supported. Group specials (e.g., `\w`, `\W`, `\d`,
   * `\D`, `\s`, `\S`) do not support non-ASCII characters. Unicode escape patterns (e.g., `\N`,
   * `\p`, `\P`) are not supported. Additionally, conditional matching (`(?(`) and back-references
   * can cause inefficiency.
   */
  schema: string;
};

export const responseFormatRegexSchema: Schema<ResponseFormatRegex> = s.object<ResponseFormatRegex>({
  type: s.defaulted(s.literal("regex"), "regex"),
  schema: s.string(),
});
