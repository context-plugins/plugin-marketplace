import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type CompleteSnapshotResponse = {
  /** The status of the snapshot. */
  status?: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const completeSnapshotResponseSchema: Schema<CompleteSnapshotResponse> =
  s.object<CompleteSnapshotResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      _keysMap: {
        status: "Status",
      },
    },
    { additionalProperties: s.json() },
  );
