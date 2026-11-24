import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An array of severity values used to search for insights. For more information, see Understanding
 * insight severities in the Amazon DevOps Guru User Guide.
 */
export const SeverityAmazonDevOpsGuruOrganizationApi = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type SeverityAmazonDevOpsGuruOrganizationApi =
  | (typeof SeverityAmazonDevOpsGuruOrganizationApi)[keyof typeof SeverityAmazonDevOpsGuruOrganizationApi]
  | (string & {});

export const severityAmazonDevOpsGuruOrganizationApiSchema: EnumSchema<SeverityAmazonDevOpsGuruOrganizationApi> =
  s.enumOf<SeverityAmazonDevOpsGuruOrganizationApi>(SeverityAmazonDevOpsGuruOrganizationApi);
