import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The criterion to be used to list compute fleet names. Valid values include: CREATED_TIME: List
 * based on when each compute fleet was created. LAST_MODIFIED_TIME: List based on when information
 * about each compute fleet was last changed. NAME: List based on each compute fleet's name. Use
 * sortOrder to specify in what order to list the compute fleet names based on the preceding
 * criteria.
 */
export const SortByAwsCodeBuildFleetApi = {
  Name: "NAME",
  CreatedTime: "CREATED_TIME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
} as const;
export type SortByAwsCodeBuildFleetApi =
  | (typeof SortByAwsCodeBuildFleetApi)[keyof typeof SortByAwsCodeBuildFleetApi]
  | (string & {});

export const sortByAwsCodeBuildFleetApiSchema: EnumSchema<SortByAwsCodeBuildFleetApi> =
  s.enumOf<SortByAwsCodeBuildFleetApi>(SortByAwsCodeBuildFleetApi);
