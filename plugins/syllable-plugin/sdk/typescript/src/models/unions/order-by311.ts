import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { insightToolPropertiesSchema, type InsightToolProperties } from "../insight-tool-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy311 = InsightToolProperties;

export const orderBy311Schema: Schema<OrderBy311> = s.of<OrderBy311>(
  s.union([s.lazy(() => insightToolPropertiesSchema)]),
);
