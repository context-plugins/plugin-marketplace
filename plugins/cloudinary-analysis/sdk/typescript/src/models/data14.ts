import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unidetAnalysisDataSchema, type UnidetAnalysisData } from "./unidet-analysis-data.js";

export type Data14 = {
  entity?: string;
  analysis?: UnidetAnalysisData;
};

export const data14Schema: Schema<Data14> = s.object<Data14>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => unidetAnalysisDataSchema)),
});
