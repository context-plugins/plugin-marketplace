import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SendMessageResponse = {
  id?: string;
  status?: string;
  cost?: number;
  segments?: number;
  /** True when this response replays an earlier request with the same idempotency key. */
  idempotencyReplay?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sendMessageResponseSchema: Schema<SendMessageResponse> = s.object<SendMessageResponse>(
  {
    id: s.optional(s.string()),
    status: s.optional(s.string()),
    cost: s.optional(s.float64()),
    segments: s.optional(s.int()),
    idempotencyReplay: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
