import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PatternListConfSerdeTypeGrok = {
  /** Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME} */
  pattern: string;
};

export const patternListConfSerdeTypeGrokSchema: Schema<PatternListConfSerdeTypeGrok> =
  s.object<PatternListConfSerdeTypeGrok>({
    pattern: s.string(),
  });
