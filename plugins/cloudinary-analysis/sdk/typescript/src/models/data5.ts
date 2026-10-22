import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cldFashionAnalysisDataSchema, type CldFashionAnalysisData } from "./cld-fashion-analysis-data.js";

export type Data5 = {
  entity?: string;
  analysis?: CldFashionAnalysisData;
};

export const data5Schema: Schema<Data5> = s.object<Data5>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => cldFashionAnalysisDataSchema)),
});
