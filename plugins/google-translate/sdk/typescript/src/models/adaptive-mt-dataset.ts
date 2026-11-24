import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An Adaptive MT Dataset. */
export type AdaptiveMtDataset = {
  /** The number of examples in the dataset. */
  exampleCount?: number;
  /** The BCP-47 language code of the target language. */
  targetLanguageCode?: string;
  /** Output only. Timestamp when this dataset was created. */
  createTime?: string;
  /** Output only. Timestamp when this dataset was last updated. */
  updateTime?: string;
  /**
   * The name of the dataset to show in the interface. The name can be up to 32 characters long and
   * can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9.
   */
  displayName?: string;
  /**
   * Identifier. The resource name of the dataset, in form of
   * `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset_id}`
   */
  name?: string;
  /** The BCP-47 language code of the source language. */
  sourceLanguageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adaptiveMtDatasetSchema: Schema<AdaptiveMtDataset> = s.object<AdaptiveMtDataset>(
  {
    exampleCount: s.optional(s.int()),
    targetLanguageCode: s.optional(s.string()),
    createTime: s.optional(s.string()),
    updateTime: s.optional(s.string()),
    displayName: s.optional(s.string()),
    name: s.optional(s.string()),
    sourceLanguageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
