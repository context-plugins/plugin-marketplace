import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  insightWorkflowPropertiesSchema,
  type InsightWorkflowProperties,
} from "../insight-workflow-properties.js";

/** The fields to include in the response */
export type Fields11 = InsightWorkflowProperties[];

export const fields11Schema: Schema<Fields11> = s.of<Fields11>(
  s.union([s.array(s.lazy(() => insightWorkflowPropertiesSchema))]),
);
