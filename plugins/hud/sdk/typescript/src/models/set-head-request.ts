import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Point a trainable model's active checkpoint (head) at one of its nodes. */
export type SetHeadRequest = {
  checkpointId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const setHeadRequestSchema: Schema<SetHeadRequest> = s.object<SetHeadRequest>(
  {
    checkpointId: s.string(),
    _keysMap: {
      checkpointId: "checkpoint_id",
    },
  },
  { additionalProperties: s.json() },
);
