import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiVisionTaggingAnalysisDataSchema,
  type AiVisionTaggingAnalysisData,
} from "./ai-vision-tagging-analysis-data.js";

export type Data2 = {
  entity?: string;
  analysis?: AiVisionTaggingAnalysisData;
};

export const data2Schema: Schema<Data2> = s.object<Data2>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => aiVisionTaggingAnalysisDataSchema)),
});
