import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  datasourceUserDefinitionSchema,
  type DatasourceUserDefinition,
} from "./datasource-user-definition.js";

/** Describes the request body for the /bulkindexusers API call */
export type BulkIndexUsersRequest = {
  /** Unique id that must be used for this instance of datasource users upload */
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
  /** datasource of the users */
  datasource: string;
  /** batch of users for the datasource */
  users: DatasourceUserDefinition[];
  /**
   * True if older user data needs to be force deleted after the upload completes. Defaults to older
   * data being deleted only if the percentage of data being deleted is less than a reasonable
   * threshold. This must only be set when `isLastPage = true`
   */
  disableStaleDataDeletionCheck?: boolean;
};

export const bulkIndexUsersRequestSchema: Schema<BulkIndexUsersRequest> = s.object<BulkIndexUsersRequest>({
  uploadId: s.string(),
  isFirstPage: s.optional(s.boolean()),
  isLastPage: s.optional(s.boolean()),
  forceRestartUpload: s.optional(s.boolean()),
  datasource: s.string(),
  users: s.array(s.lazy(() => datasourceUserDefinitionSchema)),
  disableStaleDataDeletionCheck: s.optional(s.boolean()),
});
