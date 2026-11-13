import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Snapshot = {
  /** Unique identifier for the snapshot */
  snapshotId: string;
  /** When the snapshot was created */
  lastModified: Date;
  /** Document ID that can be used to open this snapshot */
  docId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const snapshotSchema: Schema<Snapshot> = s.object<Snapshot>(
  {
    snapshotId: s.string(),
    lastModified: s.dateTime(),
    docId: s.string(),
  },
  { additionalProperties: s.json() },
);
