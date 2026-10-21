import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  imageQualityAnalysisDataSchema,
  type ImageQualityAnalysisData,
} from "./image-quality-analysis-data.js";

export type Data11 = {
  entity?: string;
  analysis?: ImageQualityAnalysisData;
};

export const data11Schema: Schema<Data11> = s.object<Data11>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => imageQualityAnalysisDataSchema)),
});
