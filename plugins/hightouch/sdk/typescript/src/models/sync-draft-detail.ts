import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";
import { relatedDraftSchema, type RelatedDraft } from "./related-draft.js";
import { reviewMetadataSchema, type ReviewMetadata } from "./review-metadata.js";
import { syncDraftStatusSchema, type SyncDraftStatus } from "./sync-draft-status.js";
import { syncSchema, type Sync } from "./sync.js";
import { userReferenceSchema, type UserReference } from "./user-reference.js";

export type SyncDraftDetail = {
  /** The draft's id */
  id: string;
  /** The id of the sync the draft changes */
  syncId: string;
  /** `create` publishes a new sync, `update` changes an existing one */
  operation: Operation;
  /** The state of a sync draft. New values may be added, so treat an unknown value as closed. */
  status: SyncDraftStatus;
  /** The user who submitted the draft */
  requestedBy: UserReference;
  /** The users asked to review the draft */
  requestedApprovers: UserReference[];
  /** The comment the requester left for reviewers */
  requestComment: string | null;
  /** The timestamp when the draft was created */
  createdAt: Date;
  /** The timestamp when the draft last changed */
  updatedAt: Date;
  /**
   * The user who approved or rejected the draft. With an API key, this is the user who owns the
   * key.
   */
  reviewedBy: UserReference;
  /** The timestamp when the draft was approved or rejected */
  reviewedAt: Date | null;
  /** The metadata sent with the approval or rejection */
  reviewMetadata: ReviewMetadata | null;
  /** The sync as it is now, or null for a draft that creates the sync */
  current: Sync;
  /** The sync as it will be after approval, or null once the draft is closed */
  proposed: Sync;
  /** The top-level sync fields that the draft changes */
  changedFields: string[];
  /** Send as `expectedDraftVersion` to approve exactly this version of the draft */
  draftVersion: string;
  /** Send as `expectedResourceVersion` to approve only if the sync has not changed */
  resourceVersion: string;
  relatedDrafts: RelatedDraft[];
};

export const syncDraftDetailSchema: Schema<SyncDraftDetail> = s.object<SyncDraftDetail>({
  id: s.string(),
  syncId: s.string(),
  operation: operationSchema,
  status: syncDraftStatusSchema,
  requestedBy: userReferenceSchema,
  requestedApprovers: s.array(s.lazy(() => userReferenceSchema)),
  requestComment: s.nullable(s.string()),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  reviewedBy: userReferenceSchema,
  reviewedAt: s.nullable(s.dateTime()),
  reviewMetadata: s.nullable(s.lazy(() => reviewMetadataSchema)),
  current: syncSchema,
  proposed: syncSchema,
  changedFields: s.array(s.string()),
  draftVersion: s.string(),
  resourceVersion: s.string(),
  relatedDrafts: s.array(s.lazy(() => relatedDraftSchema)),
});
