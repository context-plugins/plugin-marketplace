import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";
import { reviewMetadataSchema, type ReviewMetadata } from "./review-metadata.js";
import { syncDraftStatusSchema, type SyncDraftStatus } from "./sync-draft-status.js";
import { userReferenceSchema, type UserReference } from "./user-reference.js";

/**
 * A proposed change to a sync that waits for approval. Approving it applies the change; rejecting
 * it closes it without applying anything.
 */
export type SyncDraft = {
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
};

export const syncDraftSchema: Schema<SyncDraft> = s.object<SyncDraft>({
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
});
