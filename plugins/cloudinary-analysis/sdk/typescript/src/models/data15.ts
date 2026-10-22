import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watermarkDetectionAnalysisDataSchema,
  type WatermarkDetectionAnalysisData,
} from "./watermark-detection-analysis-data.js";

export type Data15 = {
  entity?: string;
  analysis?: WatermarkDetectionAnalysisData;
};

export const data15Schema: Schema<Data15> = s.object<Data15>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => watermarkDetectionAnalysisDataSchema)),
});
