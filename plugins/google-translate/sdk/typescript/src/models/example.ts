import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A sentence pair. */
export type Example = {
  /** Sentence in source language. */
  sourceText?: string;
  /** Output only. Usage of the sentence pair. Options are TRAIN|VALIDATION|TEST. */
  usage?: string;
  /**
   * Output only. The resource name of the example, in form of
   * `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}/examples/{example_id}`
   */
  name?: string;
  /** Sentence in target language. */
  targetText?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exampleSchema: Schema<Example> = s.object<Example>(
  {
    sourceText: s.optional(s.string()),
    usage: s.optional(s.string()),
    name: s.optional(s.string()),
    targetText: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
