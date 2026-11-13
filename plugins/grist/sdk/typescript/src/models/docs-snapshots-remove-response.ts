import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsSnapshotsRemoveResponse = {
  /** The snapshot IDs that were removed */
  snapshotIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsSnapshotsRemoveResponseSchema: Schema<DocsSnapshotsRemoveResponse> =
  s.object<DocsSnapshotsRemoveResponse>(
    {
      snapshotIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
