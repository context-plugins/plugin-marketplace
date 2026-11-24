import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of a reactive insight. */
export const Status3AmazonDevOpsGuruOrganizationApi = {
  Ongoing: "ONGOING",
  Closed: "CLOSED",
} as const;
export type Status3AmazonDevOpsGuruOrganizationApi =
  | (typeof Status3AmazonDevOpsGuruOrganizationApi)[keyof typeof Status3AmazonDevOpsGuruOrganizationApi]
  | (string & {});

export const status3AmazonDevOpsGuruOrganizationApiSchema: EnumSchema<Status3AmazonDevOpsGuruOrganizationApi> =
  s.enumOf<Status3AmazonDevOpsGuruOrganizationApi>(Status3AmazonDevOpsGuruOrganizationApi);
