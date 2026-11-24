import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A trained translation model. */
export type Model = {
  /** Output only. The BCP-47 language code of the source language. */
  sourceLanguageCode?: string;
  /** Output only. Timestamp when this model was last updated. */
  updateTime?: string;
  /** Output only. The BCP-47 language code of the target language. */
  targetLanguageCode?: string;
  /** Output only. Number of examples (sentence pairs) used to train the model. */
  trainExampleCount?: number;
  /** Output only. Number of examples (sentence pairs) used to test the model. */
  testExampleCount?: number;
  /**
   * Required. The dataset from which the model is trained, in form of
   * `projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}`
   */
  dataset?: string;
  /**
   * The name of the model to show in the interface. The name can be up to 32 characters long and
   * can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
   */
  displayName?: string;
  /**
   * Output only. Timestamp when the model resource was created, which is also when the training
   * started.
   */
  createTime?: string;
  /** Output only. Number of examples (sentence pairs) used to validate the model. */
  validateExampleCount?: number;
  /**
   * The resource name of the model, in form of
   * `projects/{project-number-or-id}/locations/{location_id}/models/{model_id}`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelSchema: Schema<Model> = s.object<Model>(
  {
    sourceLanguageCode: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    targetLanguageCode: s.optional(s.string()),
    trainExampleCount: s.optional(s.int()),
    testExampleCount: s.optional(s.int()),
    dataset: s.optional(s.string()),
    displayName: s.optional(s.string()),
    createTime: s.optional(s.string()),
    validateExampleCount: s.optional(s.int()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
