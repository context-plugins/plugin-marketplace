import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** An array of status values used to search for insights. */
export const StatusAmazonDevOpsGuruOrganizationApi = {
  Ongoing: "ONGOING",
  Closed: "CLOSED",
} as const;
export type StatusAmazonDevOpsGuruOrganizationApi =
  | (typeof StatusAmazonDevOpsGuruOrganizationApi)[keyof typeof StatusAmazonDevOpsGuruOrganizationApi]
  | (string & {});

export const statusAmazonDevOpsGuruOrganizationApiSchema: EnumSchema<StatusAmazonDevOpsGuruOrganizationApi> =
  s.enumOf<StatusAmazonDevOpsGuruOrganizationApi>(StatusAmazonDevOpsGuruOrganizationApi);
