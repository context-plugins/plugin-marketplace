import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A saved snapshot of a diagram layer's state. */
export type CloudDiagramLayerSnapshot = {
  /** Snapshot ID. */
  id: string;
  /** Snapshot name. */
  name?: string;
  /** Timestamp when the snapshot was created. */
  createdAt: Date;
  /** ID of the previous snapshot in the chain. */
  prevState?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramLayerSnapshotSchema: Schema<CloudDiagramLayerSnapshot> =
  s.object<CloudDiagramLayerSnapshot>(
    {
      id: s.string(),
      name: s.optional(s.string()),
      createdAt: s.dateTime(),
      prevState: s.optional(s.string()),
      _keysMap: {
        id: "_id",
      },
    },
    { additionalProperties: s.json() },
  );
