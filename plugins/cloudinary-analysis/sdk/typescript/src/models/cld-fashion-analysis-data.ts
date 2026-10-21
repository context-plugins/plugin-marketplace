import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CldFashionAnalysisData = {
  tags: Record<string, unknown>;
  modelVersion?: number;
};

export const cldFashionAnalysisDataSchema: Schema<CldFashionAnalysisData> = s.object<CldFashionAnalysisData>({
  tags: s.record(s.string(), s.unknown()),
  modelVersion: s.optional(s.int()),
  _keysMap: {
    modelVersion: "model_version",
  },
});
