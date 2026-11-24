import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1CallsTransferRequest = {
  /**
   * E.164 number, or a `sip:` URI to your own endpoint. SIP hosts must be public — private and
   * infrastructure ranges are rejected.
   */
  destination: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallsTransferRequestSchema: Schema<ApiV1CallsTransferRequest> =
  s.object<ApiV1CallsTransferRequest>(
    {
      destination: s.string(),
    },
    { additionalProperties: s.json() },
  );
