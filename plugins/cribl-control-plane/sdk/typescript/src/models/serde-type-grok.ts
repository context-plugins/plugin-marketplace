import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  patternListConfSerdeTypeGrokSchema,
  type PatternListConfSerdeTypeGrok,
} from "./pattern-list-conf-serde-type-grok.js";
import { type9Schema, type Type9 } from "./type9.js";

export type SerdeTypeGrok = {
  /** Parser or formatter type to use. */
  type?: Type9;
  /** Field containing text to be parsed */
  srcField?: string;
  /** Name of the field to add fields to. Extract mode only. */
  dstField?: string;
  /** Grok pattern to extract fields. Syntax supported: %{PATTERN_NAME:FIELD_NAME} */
  pattern: string;
  /** Additional Grok patterns to apply to the source field. */
  patternList?: PatternListConfSerdeTypeGrok[];
};

export const serdeTypeGrokSchema: Schema<SerdeTypeGrok> = s.object<SerdeTypeGrok>({
  type: s.optional(s.lazy(() => type9Schema)),
  srcField: s.optional(s.string()),
  dstField: s.optional(s.string()),
  pattern: s.string(),
  patternList: s.optional(s.array(s.lazy(() => patternListConfSerdeTypeGrokSchema))),
});
