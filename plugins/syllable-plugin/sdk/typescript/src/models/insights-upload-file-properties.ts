import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InsightsUploadFileProperties = {
  Filename: "filename",
  FilenameExact: "filename_exact",
  CallId: "call_id",
  AgentNumber: "agent_number",
  CustomerNumber: "customer_number",
  Duration: "duration",
  StartTime: "start_time",
  EndTime: "end_time",
  CreatedAt: "created_at",
} as const;
export type InsightsUploadFileProperties =
  | (typeof InsightsUploadFileProperties)[keyof typeof InsightsUploadFileProperties]
  | (string & {});

export const insightsUploadFilePropertiesSchema: EnumSchema<InsightsUploadFileProperties> =
  s.enumOf<InsightsUploadFileProperties>(InsightsUploadFileProperties);
