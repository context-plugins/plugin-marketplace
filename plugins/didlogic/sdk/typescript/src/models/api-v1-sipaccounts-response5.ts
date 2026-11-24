import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sipaccount5Schema, type Sipaccount5 } from "./sipaccount5.js";
import { warningSchema, type Warning } from "./warning.js";

export type ApiV1SipaccountsResponse5 = {
  /** Updated SIP account details */
  sipaccount: Sipaccount5;
  /**
   * Non-fatal notices for parts of the request that were accepted but silently skipped (e.g. an
   * unverified caller ID). Present only when non-empty.
   */
  warnings?: Warning[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SipaccountsResponse5Schema: Schema<ApiV1SipaccountsResponse5> =
  s.object<ApiV1SipaccountsResponse5>(
    {
      sipaccount: sipaccount5Schema,
      warnings: s.optional(s.array(s.lazy(() => warningSchema))),
    },
    { additionalProperties: s.json() },
  );
