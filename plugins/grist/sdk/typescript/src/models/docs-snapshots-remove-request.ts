import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsSnapshotsRemoveRequest = {
  /** List of snapshot IDs to remove */
  snapshotIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsSnapshotsRemoveRequestSchema: Schema<DocsSnapshotsRemoveRequest> =
  s.object<DocsSnapshotsRemoveRequest>(
    {
      snapshotIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
