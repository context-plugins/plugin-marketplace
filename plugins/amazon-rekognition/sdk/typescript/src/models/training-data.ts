import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assetSchema, type Asset } from "./asset.js";

export type TrainingData = {
  /**
   * A manifest file that contains references to the training images and ground-truth annotations.
   */
  assets?: Asset[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trainingDataSchema: Schema<TrainingData> = s.object<TrainingData>(
  {
    assets: s.optional(s.array(s.lazy(() => assetSchema))),
    _keysMap: {
      assets: "Assets",
    },
  },
  { additionalProperties: s.json() },
);
