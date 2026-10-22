import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  patternListConfSerdeTypeGrokSchema,
  type PatternListConfSerdeTypeGrok,
} from "./pattern-list-conf-serde-type-grok.js";

export type FunctionConfSchemaGrok = {
  /** Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME} */
  pattern?: string;
  /** Additional Grok patterns to apply to the source field. */
  patternList?: PatternListConfSerdeTypeGrok[];
  /** Field on which to perform Grok extractions */
  source?: string;
};

export const functionConfSchemaGrokSchema: Schema<FunctionConfSchemaGrok> = s.object<FunctionConfSchemaGrok>({
  pattern: s.optional(s.string()),
  patternList: s.optional(s.array(s.lazy(() => patternListConfSerdeTypeGrokSchema))),
  source: s.optional(s.string()),
});
