import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cocoAnalysisDataSchema, type CocoAnalysisData } from "./coco-analysis-data.js";

export type Data7 = {
  entity?: string;
  analysis?: CocoAnalysisData;
};

export const data7Schema: Schema<Data7> = s.object<Data7>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => cocoAnalysisDataSchema)),
});
