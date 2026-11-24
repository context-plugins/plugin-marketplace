import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The severity of the insight. For more information, see Understanding insight severities in the
 * Amazon DevOps Guru User Guide.
 */
export const SeverityAmazonDevOpsGuruInsightsApi = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type SeverityAmazonDevOpsGuruInsightsApi =
  | (typeof SeverityAmazonDevOpsGuruInsightsApi)[keyof typeof SeverityAmazonDevOpsGuruInsightsApi]
  | (string & {});

export const severityAmazonDevOpsGuruInsightsApiSchema: EnumSchema<SeverityAmazonDevOpsGuruInsightsApi> =
  s.enumOf<SeverityAmazonDevOpsGuruInsightsApi>(SeverityAmazonDevOpsGuruInsightsApi);
