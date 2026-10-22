import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CldTextAnalysisData = {
  tags: Record<string, unknown>;
  modelVersion?: number;
};

export const cldTextAnalysisDataSchema: Schema<CldTextAnalysisData> = s.object<CldTextAnalysisData>({
  tags: s.record(s.string(), s.unknown()),
  modelVersion: s.optional(s.int()),
  _keysMap: {
    modelVersion: "model_version",
  },
});
