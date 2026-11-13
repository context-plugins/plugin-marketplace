import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { snapshotSchema, type Snapshot } from "./snapshot.js";

export type DocsSnapshotsResponse = {
  snapshots: Snapshot[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsSnapshotsResponseSchema: Schema<DocsSnapshotsResponse> = s.object<DocsSnapshotsResponse>(
  {
    snapshots: s.array(s.lazy(() => snapshotSchema)),
  },
  { additionalProperties: s.json() },
);
