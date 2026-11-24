import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { refinementEntrySchema, type RefinementEntry } from "./refinement-entry.js";

/** Request message for RefineText. */
export type RefineTextRequest = {
  /** Required. The BCP-47 language code for translation output, for example, "zh-CN". */
  targetLanguageCode?: string;
  /** Required. The BCP-47 language code of the source text in the request, for example, "en-US". */
  sourceLanguageCode?: string;
  /** Required. The source texts and original translations in the source and target languages. */
  refinementEntries?: RefinementEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const refineTextRequestSchema: Schema<RefineTextRequest> = s.object<RefineTextRequest>(
  {
    targetLanguageCode: s.optional(s.string()),
    sourceLanguageCode: s.optional(s.string()),
    refinementEntries: s.optional(s.array(s.lazy(() => refinementEntrySchema))),
  },
  { additionalProperties: s.json() },
);
