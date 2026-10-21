import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { insightsPropertiesSchema, type InsightsProperties } from "../insights-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy8 = InsightsProperties;

export const orderBy8Schema: Schema<OrderBy8> = s.of<OrderBy8>(
  s.union([s.lazy(() => insightsPropertiesSchema)]),
);
