import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  insightsUploadFilePropertiesSchema,
  type InsightsUploadFileProperties,
} from "../insights-upload-file-properties.js";

/** The fields to include in the response */
export type Fields10 = InsightsUploadFileProperties[];

export const fields10Schema: Schema<Fields10> = s.of<Fields10>(
  s.union([s.array(s.lazy(() => insightsUploadFilePropertiesSchema))]),
);
