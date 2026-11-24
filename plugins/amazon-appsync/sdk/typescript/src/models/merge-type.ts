import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The property that indicates which merging option is enabled in the source API association. Valid
 * merge types are MANUAL_MERGE (default) and AUTO_MERGE. Manual merges are the default behavior and
 * require the user to trigger any changes from the source APIs to the merged API manually. Auto
 * merges subscribe the merged API to the changes performed on the source APIs so that any change in
 * the source APIs are also made to the merged API. Auto merges use MergedApiExecutionRoleArn to
 * perform merge operations.
 */
export const MergeType = {
  ManualMerge: "MANUAL_MERGE",
  AutoMerge: "AUTO_MERGE",
} as const;
export type MergeType = (typeof MergeType)[keyof typeof MergeType] | (string & {});

export const mergeTypeSchema: EnumSchema<MergeType> = s.enumOf<MergeType>(MergeType);
