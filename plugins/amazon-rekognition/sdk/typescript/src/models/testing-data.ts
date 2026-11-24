import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assetSchema, type Asset } from "./asset.js";

export type TestingData = {
  /** The assets used for testing. */
  assets?: Asset[];
  /**
   * If specified, Rekognition splits training dataset to create a test dataset for the training
   * job.
   */
  autoCreate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testingDataSchema: Schema<TestingData> = s.object<TestingData>(
  {
    assets: s.optional(s.array(s.lazy(() => assetSchema))),
    autoCreate: s.optional(s.boolean()),
    _keysMap: {
      assets: "Assets",
      autoCreate: "AutoCreate",
    },
  },
  { additionalProperties: s.json() },
);
