import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cldTextAnalysisDataSchema, type CldTextAnalysisData } from "./cld-text-analysis-data.js";

export type Data6 = {
  entity?: string;
  analysis?: CldTextAnalysisData;
};

export const data6Schema: Schema<Data6> = s.object<Data6>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => cldTextAnalysisDataSchema)),
});
