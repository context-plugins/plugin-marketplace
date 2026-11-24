import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mergeTypeSchema, type MergeType } from "./merge-type.js";

export type SourceApiAssociationConfig = {
  /**
   * The property that indicates which merging option is enabled in the source API association.
   * Valid merge types are MANUAL_MERGE (default) and AUTO_MERGE. Manual merges are the default
   * behavior and require the user to trigger any changes from the source APIs to the merged API
   * manually. Auto merges subscribe the merged API to the changes performed on the source APIs so
   * that any change in the source APIs are also made to the merged API. Auto merges use
   * MergedApiExecutionRoleArn to perform merge operations.
   */
  mergeType?: MergeType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceApiAssociationConfigSchema: Schema<SourceApiAssociationConfig> =
  s.object<SourceApiAssociationConfig>(
    {
      mergeType: s.optional(s.lazy(() => mergeTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
