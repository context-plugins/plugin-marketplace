import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegexListConfSerdeTypeRegex = {
  /**
   * Regex literal with named capturing groups, such as (?<foo>bar), or _NAME_ and _VALUE_ capturing
   * groups, such as (?<_NAME_0>[^ =]+)=(?<_VALUE_0>[^,]+)
   */
  regex: string;
};

export const regexListConfSerdeTypeRegexSchema: Schema<RegexListConfSerdeTypeRegex> =
  s.object<RegexListConfSerdeTypeRegex>({
    regex: s.string(),
  });
