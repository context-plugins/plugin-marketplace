import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sipaccountSchema, type Sipaccount } from "./sipaccount.js";

export type ApiV1SipaccountsResponse = {
  /** List of SIP accounts */
  sipaccounts: Sipaccount[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SipaccountsResponseSchema: Schema<ApiV1SipaccountsResponse> =
  s.object<ApiV1SipaccountsResponse>(
    {
      sipaccounts: s.array(s.lazy(() => sipaccountSchema)),
    },
    { additionalProperties: s.json() },
  );
