import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sipaccount3Schema, type Sipaccount3 } from "./sipaccount3.js";

export type ApiV1SipaccountsResponse4 = {
  /** SIP account details */
  sipaccount: Sipaccount3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SipaccountsResponse4Schema: Schema<ApiV1SipaccountsResponse4> =
  s.object<ApiV1SipaccountsResponse4>(
    {
      sipaccount: sipaccount3Schema,
    },
    { additionalProperties: s.json() },
  );
