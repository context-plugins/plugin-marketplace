import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudDiagramActivityItemSchema,
  type CloudDiagramActivityItem,
} from "./cloud-diagram-activity-item.js";

/** A snapshot activity group containing the individual activity records that produced it. */
export type CloudDiagramSnapshotActivityGroup = {
  /** Activity group ID. */
  id: string;
  /** Layer ID this group belongs to. */
  statussheet: string;
  /** Timestamp of the activity group. */
  timestamp: Date;
  /** Tags associated with the group. */
  tags?: string[];
  /** ID of the associated snapshot (equal to the group ID). */
  snapshot: string;
  /** Individual activity records within this group. */
  items?: CloudDiagramActivityItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramSnapshotActivityGroupSchema: Schema<CloudDiagramSnapshotActivityGroup> =
  s.object<CloudDiagramSnapshotActivityGroup>(
    {
      id: s.string(),
      statussheet: s.string(),
      timestamp: s.dateTime(),
      tags: s.optional(s.array(s.string())),
      snapshot: s.string(),
      items: s.optional(s.array(s.lazy(() => cloudDiagramActivityItemSchema))),
      _keysMap: {
        id: "_id",
      },
    },
    { additionalProperties: s.json() },
  );
