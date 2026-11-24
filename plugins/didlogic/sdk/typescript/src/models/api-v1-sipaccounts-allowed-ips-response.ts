import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SipaccountsAllowedIpsResponse = {
  /** List of allowed IP address strings */
  allowedIps: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SipaccountsAllowedIpsResponseSchema: Schema<ApiV1SipaccountsAllowedIpsResponse> =
  s.object<ApiV1SipaccountsAllowedIpsResponse>(
    {
      allowedIps: s.array(s.string()),
      _keysMap: {
        allowedIps: "allowed_ips",
      },
    },
    { additionalProperties: s.json() },
  );
