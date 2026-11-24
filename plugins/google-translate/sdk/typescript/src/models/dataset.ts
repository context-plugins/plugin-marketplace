import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A dataset that hosts the examples (sentence pairs) used for translation models. */
export type Dataset = {
  /** The BCP-47 language code of the target language. */
  targetLanguageCode?: string;
  /** The BCP-47 language code of the source language. */
  sourceLanguageCode?: string;
  /** Output only. Timestamp when this dataset was last updated. */
  updateTime?: string;
  /**
   * The name of the dataset to show in the interface. The name can be up to 32 characters long and
   * can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
   */
  displayName?: string;
  /** Output only. The number of examples in the dataset. */
  exampleCount?: number;
  /** Output only. Number of training examples (sentence pairs). */
  trainExampleCount?: number;
  /** Output only. Number of test examples (sentence pairs). */
  testExampleCount?: number;
  /**
   * The resource name of the dataset, in form of
   * `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`
   */
  name?: string;
  /** Output only. Timestamp when this dataset was created. */
  createTime?: string;
  /** Output only. Number of validation examples (sentence pairs). */
  validateExampleCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetSchema: Schema<Dataset> = s.object<Dataset>(
  {
    targetLanguageCode: s.optional(s.string()),
    sourceLanguageCode: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    displayName: s.optional(s.string()),
    exampleCount: s.optional(s.int()),
    trainExampleCount: s.optional(s.int()),
    testExampleCount: s.optional(s.int()),
    name: s.optional(s.string()),
    createTime: s.optional(s.string()),
    validateExampleCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
