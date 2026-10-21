import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { captioningAnalysisDataSchema, type CaptioningAnalysisData } from "./captioning-analysis-data.js";

export type Data3 = {
  entity?: string;
  analysis?: CaptioningAnalysisData;
};

export const data3Schema: Schema<Data3> = s.object<Data3>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => captioningAnalysisDataSchema)),
});
