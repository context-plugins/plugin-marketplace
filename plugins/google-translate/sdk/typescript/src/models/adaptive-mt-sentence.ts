import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An AdaptiveMt sentence entry. */
export type AdaptiveMtSentence = {
  /** Output only. Timestamp when this sentence was created. */
  createTime?: string;
  /** Output only. Timestamp when this sentence was last updated. */
  updateTime?: string;
  /** Required. The source sentence. */
  sourceSentence?: string;
  /** Required. The target sentence. */
  targetSentence?: string;
  /**
   * Identifier. The resource name of the file, in form of
   * `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}/adaptiveMtSentences/{sentence}`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adaptiveMtSentenceSchema: Schema<AdaptiveMtSentence> = s.object<AdaptiveMtSentence>(
  {
    createTime: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    sourceSentence: s.optional(s.string()),
    targetSentence: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
