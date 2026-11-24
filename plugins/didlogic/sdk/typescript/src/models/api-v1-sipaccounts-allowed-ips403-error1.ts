import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SipaccountsAllowedIps403Error1 = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SipaccountsAllowedIps403Error1Schema: Schema<ApiV1SipaccountsAllowedIps403Error1> =
  s.object<ApiV1SipaccountsAllowedIps403Error1>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
