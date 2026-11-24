import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groundTruthManifestSchema, type GroundTruthManifest } from "./ground-truth-manifest.js";

export type Asset = {
  groundTruthManifest?: GroundTruthManifest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assetSchema: Schema<Asset> = s.object<Asset>(
  {
    groundTruthManifest: s.optional(s.lazy(() => groundTruthManifestSchema)),
    _keysMap: {
      groundTruthManifest: "GroundTruthManifest",
    },
  },
  { additionalProperties: s.json() },
);
