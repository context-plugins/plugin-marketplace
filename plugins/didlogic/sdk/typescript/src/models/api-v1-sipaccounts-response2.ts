import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sipaccount2Schema, type Sipaccount2 } from "./sipaccount2.js";
import { warningSchema, type Warning } from "./warning.js";

export type ApiV1SipaccountsResponse2 = {
  /** Created SIP account details */
  sipaccount: Sipaccount2;
  /**
   * Non-fatal notices for parts of the request that were accepted but silently skipped (e.g. an
   * unverified caller ID). Present only when non-empty.
   */
  warnings?: Warning[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SipaccountsResponse2Schema: Schema<ApiV1SipaccountsResponse2> =
  s.object<ApiV1SipaccountsResponse2>(
    {
      sipaccount: sipaccount2Schema,
      warnings: s.optional(s.array(s.lazy(() => warningSchema))),
    },
    { additionalProperties: s.json() },
  );
