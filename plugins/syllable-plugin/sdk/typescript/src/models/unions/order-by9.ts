import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  insightsFolderPropertiesSchema,
  type InsightsFolderProperties,
} from "../insights-folder-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy9 = InsightsFolderProperties;

export const orderBy9Schema: Schema<OrderBy9> = s.of<OrderBy9>(
  s.union([s.lazy(() => insightsFolderPropertiesSchema)]),
);
