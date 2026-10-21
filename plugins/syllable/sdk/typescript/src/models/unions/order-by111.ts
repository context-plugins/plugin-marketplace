import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  insightWorkflowPropertiesSchema,
  type InsightWorkflowProperties,
} from "../insight-workflow-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy111 = InsightWorkflowProperties;

export const orderBy111Schema: Schema<OrderBy111> = s.of<OrderBy111>(
  s.union([s.lazy(() => insightWorkflowPropertiesSchema)]),
);
