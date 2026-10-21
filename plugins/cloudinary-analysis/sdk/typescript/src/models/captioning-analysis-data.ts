import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type CaptioningAnalysisData = {
  data: Data4;
  modelVersion?: number;
};

export const captioningAnalysisDataSchema: Schema<CaptioningAnalysisData> = s.object<CaptioningAnalysisData>({
  data: data4Schema,
  modelVersion: s.optional(s.int()),
  _keysMap: {
    modelVersion: "model_version",
  },
});
