import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sipaccount1Schema, type Sipaccount1 } from "./sipaccount1.js";

export type ApiV1SipaccountsRequest = {
  sipaccount: Sipaccount1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SipaccountsRequestSchema: Schema<ApiV1SipaccountsRequest> =
  s.object<ApiV1SipaccountsRequest>(
    {
      sipaccount: sipaccount1Schema,
    },
    { additionalProperties: s.json() },
  );
