import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sortOrderAwsCodeBuildBuildsApiSchema,
  type SortOrderAwsCodeBuildBuildsApi,
} from "./sort-order-aws-code-build-builds-api.js";

export type ListBuildsForProjectInputAwsCodeBuildBuildsApi = {
  /** The name of the CodeBuild project. */
  projectName: string;
  /**
   * The order to sort the results in. The results are sorted by build number, not the build
   * identifier. If this is not specified, the results are sorted in descending order. Valid values
   * include: ASCENDING: List the build identifiers in ascending order, by build number. DESCENDING:
   * List the build identifiers in descending order, by build number. If the project has more than
   * 100 builds, setting the sort order will result in an error.
   */
  sortOrder?: SortOrderAwsCodeBuildBuildsApi;
  /**
   * During a previous call, if there are more than 100 items in the list, only the first 100 items
   * are returned, along with a unique string called a nextToken. To get the next batch of items in
   * the list, call this operation again, adding the next token to the call. To get all of the items
   * in the list, keep calling this operation with each subsequent next token that is returned,
   * until no more next tokens are returned.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBuildsForProjectInputAwsCodeBuildBuildsApiSchema: Schema<ListBuildsForProjectInputAwsCodeBuildBuildsApi> =
  s.object<ListBuildsForProjectInputAwsCodeBuildBuildsApi>(
    {
      projectName: s.string(),
      sortOrder: s.optional(s.lazy(() => sortOrderAwsCodeBuildBuildsApiSchema)),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
