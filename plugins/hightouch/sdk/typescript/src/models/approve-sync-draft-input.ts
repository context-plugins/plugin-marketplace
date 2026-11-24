import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  draftReviewMetadataInputInternalSchema,
  draftReviewMetadataInputSchema,
  type DraftReviewMetadataInput,
} from "./draft-review-metadata-input.js";

export type ApproveSyncDraftInput = {
  /** The `draftVersion` from the draft the reviewer saw */
  expectedDraftVersion: string;
  /** The `resourceVersion` from the draft the reviewer saw */
  expectedResourceVersion: string;
  /** Identifies the reviewer in the caller's own approval system. */
  metadata?: DraftReviewMetadataInput;
};

const approveSyncDraftInputProperties: s.Shape<ApproveSyncDraftInput> = {
  expectedDraftVersion: s.string(),
  expectedResourceVersion: s.string(),
  metadata: s.optional(s.lazy(() => draftReviewMetadataInputInternalSchema)),
};

export const approveSyncDraftInputInternalSchema: Schema<ApproveSyncDraftInput> =
  s.object<ApproveSyncDraftInput>(approveSyncDraftInputProperties);

export const approveSyncDraftInputSchema: Schema<ApproveSyncDraftInput> = s.lazySchema(() =>
  s.object<ApproveSyncDraftInput>({
    ...approveSyncDraftInputProperties,
    metadata: s.optional(s.lazy(() => draftReviewMetadataInputSchema)),
  }),
);
