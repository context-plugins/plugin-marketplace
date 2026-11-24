import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The severity level of the finding. Computed server-side from the security risk counts. */
export const SeverityDoiTInsightsApi = {
  Critical: "critical",
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type SeverityDoiTInsightsApi =
  | (typeof SeverityDoiTInsightsApi)[keyof typeof SeverityDoiTInsightsApi]
  | (string & {});

export const severityDoiTInsightsApiSchema: EnumSchema<SeverityDoiTInsightsApi> =
  s.enumOf<SeverityDoiTInsightsApi>(SeverityDoiTInsightsApi);
