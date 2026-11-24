import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1CallsTransferResponse = {
  callId?: string;
  destination?: string;
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallsTransferResponseSchema: Schema<ApiV1CallsTransferResponse> =
  s.object<ApiV1CallsTransferResponse>(
    {
      callId: s.optional(s.string()),
      destination: s.optional(s.string()),
      status: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
