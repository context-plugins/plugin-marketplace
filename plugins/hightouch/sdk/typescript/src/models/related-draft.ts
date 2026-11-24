import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operation2Schema, type Operation2 } from "./operation2.js";
import { syncDraftStatusSchema, type SyncDraftStatus } from "./sync-draft-status.js";

/**
 * A pending draft on a resource the sync depends on. Approving the sync draft does not approve it.
 */
export type RelatedDraft = {
  id: string;
  modelId: string;
  operation: Operation2;
  /** The state of a sync draft. New values may be added, so treat an unknown value as closed. */
  status: SyncDraftStatus;
};

export const relatedDraftSchema: Schema<RelatedDraft> = s.object<RelatedDraft>({
  id: s.string(),
  modelId: s.string(),
  operation: operation2Schema,
  status: syncDraftStatusSchema,
});
