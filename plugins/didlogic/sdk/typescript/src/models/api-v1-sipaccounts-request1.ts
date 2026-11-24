import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sipaccount4Schema, type Sipaccount4 } from "./sipaccount4.js";

export type ApiV1SipaccountsRequest1 = {
  sipaccount?: Sipaccount4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SipaccountsRequest1Schema: Schema<ApiV1SipaccountsRequest1> =
  s.object<ApiV1SipaccountsRequest1>(
    {
      sipaccount: s.optional(s.lazy(() => sipaccount4Schema)),
    },
    { additionalProperties: s.json() },
  );
