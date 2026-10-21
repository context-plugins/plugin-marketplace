import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { detectionSchema, type Detection } from "./detection.js";

export type WatermarkDetectionAnalysisData = {
  detections?: Detection[];
  modelVersion?: number;
};

export const watermarkDetectionAnalysisDataSchema: Schema<WatermarkDetectionAnalysisData> =
  s.object<WatermarkDetectionAnalysisData>({
    detections: s.optional(s.array(s.lazy(() => detectionSchema))),
    modelVersion: s.optional(s.int()),
    _keysMap: {
      modelVersion: "model_version",
    },
  });
