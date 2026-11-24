import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelMessageMoveTaskResult = {
  /** The approximate number of messages already moved to the destination queue. */
  approximateNumberOfMessagesMoved?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelMessageMoveTaskResultSchema: Schema<CancelMessageMoveTaskResult> =
  s.object<CancelMessageMoveTaskResult>(
    {
      approximateNumberOfMessagesMoved: s.optional(s.int()),
      _keysMap: {
        approximateNumberOfMessagesMoved: "ApproximateNumberOfMessagesMoved",
      },
    },
    { additionalProperties: s.json() },
  );
