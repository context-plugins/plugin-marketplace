import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  datasourceBulkMembershipDefinitionSchema,
  type DatasourceBulkMembershipDefinition,
} from "./datasource-bulk-membership-definition.js";

/** Describes the request body for the /bulkindexmemberships API call */
export type BulkIndexMembershipsRequest = {
  /** Unique id that must be used for this instance of datasource group memberships upload */
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
  /** datasource of the memberships */
  datasource: string;
  /** group who's memberships are specified */
  group?: string;
  /** batch of memberships for the group */
  memberships: DatasourceBulkMembershipDefinition[];
};

export const bulkIndexMembershipsRequestSchema: Schema<BulkIndexMembershipsRequest> =
  s.object<BulkIndexMembershipsRequest>({
    uploadId: s.string(),
    isFirstPage: s.optional(s.boolean()),
    isLastPage: s.optional(s.boolean()),
    forceRestartUpload: s.optional(s.boolean()),
    datasource: s.string(),
    group: s.optional(s.string()),
    memberships: s.array(s.lazy(() => datasourceBulkMembershipDefinitionSchema)),
  });
