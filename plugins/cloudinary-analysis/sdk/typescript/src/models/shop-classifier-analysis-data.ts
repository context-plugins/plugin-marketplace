import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ShopClassifierAnalysisData = {
  tags: Record<string, unknown>;
  modelVersion?: number;
};

export const shopClassifierAnalysisDataSchema: Schema<ShopClassifierAnalysisData> =
  s.object<ShopClassifierAnalysisData>({
    tags: s.record(s.string(), s.unknown()),
    modelVersion: s.optional(s.int()),
    _keysMap: {
      modelVersion: "model_version",
    },
  });
