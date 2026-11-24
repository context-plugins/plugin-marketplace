import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groundTruthManifestSchema, type GroundTruthManifest } from "./ground-truth-manifest.js";

export type DatasetSource = {
  groundTruthManifest?: GroundTruthManifest;
  /** The ARN of an Amazon Rekognition Custom Labels dataset that you want to copy. */
  datasetArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetSourceSchema: Schema<DatasetSource> = s.object<DatasetSource>(
  {
    groundTruthManifest: s.optional(s.lazy(() => groundTruthManifestSchema)),
    datasetArn: s.optional(s.string()),
    _keysMap: {
      groundTruthManifest: "GroundTruthManifest",
      datasetArn: "DatasetArn",
    },
  },
  { additionalProperties: s.json() },
);
