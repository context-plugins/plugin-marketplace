import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lvisAnalysisDataSchema, type LvisAnalysisData } from "./lvis-analysis-data.js";

export type Data12 = {
  entity?: string;
  analysis?: LvisAnalysisData;
};

export const data12Schema: Schema<Data12> = s.object<Data12>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => lvisAnalysisDataSchema)),
});
