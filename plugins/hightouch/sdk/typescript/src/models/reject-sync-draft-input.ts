import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  draftReviewMetadataInputInternalSchema,
  draftReviewMetadataInputSchema,
  type DraftReviewMetadataInput,
} from "./draft-review-metadata-input.js";

export type RejectSyncDraftInput = {
  /** Identifies the reviewer in the caller's own approval system. */
  metadata?: DraftReviewMetadataInput;
};

const rejectSyncDraftInputProperties: s.Shape<RejectSyncDraftInput> = {
  metadata: s.optional(s.lazy(() => draftReviewMetadataInputInternalSchema)),
};

export const rejectSyncDraftInputInternalSchema: Schema<RejectSyncDraftInput> =
  s.object<RejectSyncDraftInput>(rejectSyncDraftInputProperties);

export const rejectSyncDraftInputSchema: Schema<RejectSyncDraftInput> = s.lazySchema(() =>
  s.object<RejectSyncDraftInput>({
    ...rejectSyncDraftInputProperties,
    metadata: s.optional(s.lazy(() => draftReviewMetadataInputSchema)),
  }),
);
