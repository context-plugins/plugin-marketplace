import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiVisionGeneralAnalysisDataSchema,
  type AiVisionGeneralAnalysisData,
} from "./ai-vision-general-analysis-data.js";

export type Data = {
  entity?: string;
  analysis?: AiVisionGeneralAnalysisData;
};

export const dataSchema: Schema<Data> = s.object<Data>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => aiVisionGeneralAnalysisDataSchema)),
});
