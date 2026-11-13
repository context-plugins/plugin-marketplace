import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsReplaceRequest = {
  /** ID of document to copy content from */
  sourceDocId?: string;
  /** ID of snapshot to restore from */
  snapshotId?: string;
  /** Reset tutorial progress when replacing (for tutorial forks) */
  resetTutorialMetadata?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsReplaceRequestSchema: Schema<DocsReplaceRequest> = s.object<DocsReplaceRequest>(
  {
    sourceDocId: s.optional(s.string()),
    snapshotId: s.optional(s.string()),
    resetTutorialMetadata: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
