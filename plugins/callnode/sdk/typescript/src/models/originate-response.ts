import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callStatusSchema, type CallStatus } from "./call-status.js";

export type OriginateResponse = {
  callId?: string;
  status?: CallStatus;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const originateResponseSchema: Schema<OriginateResponse> = s.object<OriginateResponse>(
  {
    callId: s.optional(s.string()),
    status: s.optional(s.lazy(() => callStatusSchema)),
    createdAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
