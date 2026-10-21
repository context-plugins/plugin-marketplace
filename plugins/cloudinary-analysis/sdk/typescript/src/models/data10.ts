import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  humanAnatomyAnalysisDataSchema,
  type HumanAnatomyAnalysisData,
} from "./human-anatomy-analysis-data.js";

export type Data10 = {
  entity?: string;
  analysis?: HumanAnatomyAnalysisData;
};

export const data10Schema: Schema<Data10> = s.object<Data10>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => humanAnatomyAnalysisDataSchema)),
});
