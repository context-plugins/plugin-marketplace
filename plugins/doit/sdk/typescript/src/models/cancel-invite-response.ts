import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response confirming invite cancellation. */
export type CancelInviteResponse = {
  /** Success message */
  message: string;
  /** The invite document ID. */
  inviteId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelInviteResponseSchema: Schema<CancelInviteResponse> = s.object<CancelInviteResponse>(
  {
    message: s.string(),
    inviteId: s.string(),
  },
  { additionalProperties: s.json() },
);
