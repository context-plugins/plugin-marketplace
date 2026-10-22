import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  googleTaggingAnalysisDataSchema,
  type GoogleTaggingAnalysisData,
} from "./google-tagging-analysis-data.js";

export type Data9 = {
  entity?: string;
  analysis?: GoogleTaggingAnalysisData;
};

export const data9Schema: Schema<Data9> = s.object<Data9>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => googleTaggingAnalysisDataSchema)),
});
