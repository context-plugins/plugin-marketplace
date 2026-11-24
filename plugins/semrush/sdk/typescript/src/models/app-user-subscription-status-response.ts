import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

/** User subscription status response object */
export type AppUserSubscriptionStatusResponse = {
  /** Response metadata */
  meta?: ResponseMeta;
  /** An object describes subscription status related to user */
  data?: Data2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appUserSubscriptionStatusResponseSchema: Schema<AppUserSubscriptionStatusResponse> =
  s.object<AppUserSubscriptionStatusResponse>(
    {
      meta: s.optional(s.lazy(() => responseMetaSchema)),
      data: s.optional(s.lazy(() => data2Schema)),
    },
    { additionalProperties: s.json() },
  );
