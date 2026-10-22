import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  shopClassifierAnalysisDataSchema,
  type ShopClassifierAnalysisData,
} from "./shop-classifier-analysis-data.js";

export type Data13 = {
  entity?: string;
  analysis?: ShopClassifierAnalysisData;
};

export const data13Schema: Schema<Data13> = s.object<Data13>({
  entity: s.optional(s.string()),
  analysis: s.optional(s.lazy(() => shopClassifierAnalysisDataSchema)),
});
