import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callStatusSchema, type CallStatus } from "./call-status.js";

export type ApiV1OutboundCallsResponse1 = {
  callId?: string;
  status?: CallStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1OutboundCallsResponse1Schema: Schema<ApiV1OutboundCallsResponse1> =
  s.object<ApiV1OutboundCallsResponse1>(
    {
      callId: s.optional(s.string()),
      status: s.optional(s.lazy(() => callStatusSchema)),
    },
    { additionalProperties: s.json() },
  );
