import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Ticket severity. */
export const SeverityDoiTSupportRequestsApi = {
  Low: "low",
  Normal: "normal",
  High: "high",
  Urgent: "urgent",
} as const;
export type SeverityDoiTSupportRequestsApi =
  | (typeof SeverityDoiTSupportRequestsApi)[keyof typeof SeverityDoiTSupportRequestsApi]
  | (string & {});

export const severityDoiTSupportRequestsApiSchema: EnumSchema<SeverityDoiTSupportRequestsApi> =
  s.enumOf<SeverityDoiTSupportRequestsApi>(SeverityDoiTSupportRequestsApi);
