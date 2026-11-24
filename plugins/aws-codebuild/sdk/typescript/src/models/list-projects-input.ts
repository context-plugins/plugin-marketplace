import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sortBySchema, type SortBy } from "./sort-by.js";
import {
  sortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiSchema,
  type SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi,
} from "./sort-order-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-listprojects-api.js";

export type ListProjectsInput = {
  /**
   * The criterion to be used to list build project names. Valid values include: CREATED_TIME: List
   * based on when each build project was created. LAST_MODIFIED_TIME: List based on when
   * information about each build project was last changed. NAME: List based on each build project's
   * name. Use sortOrder to specify in what order to list the build project names based on the
   * preceding criteria.
   */
  sortBy?: SortBy;
  /**
   * The order in which to list build projects. Valid values include: ASCENDING: List in ascending
   * order. DESCENDING: List in descending order. Use sortBy to specify the criterion to be used to
   * list build project names.
   */
  sortOrder?: SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi;
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

export const listProjectsInputSchema: Schema<ListProjectsInput> = s.object<ListProjectsInput>(
  {
    sortBy: s.optional(s.lazy(() => sortBySchema)),
    sortOrder: s.optional(
      s.lazy(() => sortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiSchema),
    ),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
