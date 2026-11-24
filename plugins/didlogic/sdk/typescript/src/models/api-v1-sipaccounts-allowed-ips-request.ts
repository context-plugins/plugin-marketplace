import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SipaccountsAllowedIpsRequest = {
  /** Single IPv4 address in dotted-decimal form; a range (CIDR) is rejected */
  ip: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SipaccountsAllowedIpsRequestSchema: Schema<ApiV1SipaccountsAllowedIpsRequest> =
  s.object<ApiV1SipaccountsAllowedIpsRequest>(
    {
      ip: s.string(),
    },
    { additionalProperties: s.json() },
  );
