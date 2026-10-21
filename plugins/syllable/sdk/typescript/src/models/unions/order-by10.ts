import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  insightsUploadFilePropertiesSchema,
  type InsightsUploadFileProperties,
} from "../insights-upload-file-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy10 = InsightsUploadFileProperties;

export const orderBy10Schema: Schema<OrderBy10> = s.of<OrderBy10>(
  s.union([s.lazy(() => insightsUploadFilePropertiesSchema)]),
);
