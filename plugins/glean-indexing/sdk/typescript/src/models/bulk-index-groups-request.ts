import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  datasourceGroupDefinitionSchema,
  type DatasourceGroupDefinition,
} from "./datasource-group-definition.js";

/** Describes the request body for the /bulkindexgroups API call */
export type BulkIndexGroupsRequest = {
  /** Unique id that must be used for this instance of datasource groups upload */
  uploadId: string;
  /** true if this is the first page of the upload. Defaults to false */
  isFirstPage?: boolean;
  /** true if this is the last page of the upload. Defaults to false */
  isLastPage?: boolean;
  /**
   * Flag to discard previous upload attempts and start from scratch. Must be specified with
   * isFirstPage=true
   */
  forceRestartUpload?: boolean;
  /** datasource of the groups */
  datasource: string;
  /** batch of groups for the datasource */
  groups: DatasourceGroupDefinition[];
  /**
   * True if older group data needs to be force deleted after the upload completes. Defaults to
   * older data being deleted only if the percentage of data being deleted is less than a reasonable
   * threshold. This must only be set when `isLastPage = true`
   */
  disableStaleDataDeletionCheck?: boolean;
};

export const bulkIndexGroupsRequestSchema: Schema<BulkIndexGroupsRequest> = s.object<BulkIndexGroupsRequest>({
  uploadId: s.string(),
  isFirstPage: s.optional(s.boolean()),
  isLastPage: s.optional(s.boolean()),
  forceRestartUpload: s.optional(s.boolean()),
  datasource: s.string(),
  groups: s.array(s.lazy(() => datasourceGroupDefinitionSchema)),
  disableStaleDataDeletionCheck: s.optional(s.boolean()),
});
