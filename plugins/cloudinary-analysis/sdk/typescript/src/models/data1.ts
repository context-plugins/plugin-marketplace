import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiVisionModerationAnalysisDataSchema,
  type AiVisionModerationAnalysisData,
} from "./ai-vision-moderation-analysis-data.js";

export type Data1 = {
  entity?: string;
  analysis?: AiVisionModerationAnalysisData;
};

export const data1Schema: Schema<Data1> = s.object<Data1>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => aiVisionModerationAnalysisDataSchema)),
});
