import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnidetAnalysisData = {
  tags: Record<string, unknown>;
  modelVersion?: number;
};

export const unidetAnalysisDataSchema: Schema<UnidetAnalysisData> = s.object<UnidetAnalysisData>({
  tags: s.record(s.string(), s.unknown()),
  modelVersion: s.optional(s.int()),
  _keysMap: {
    modelVersion: "model_version",
  },
});
