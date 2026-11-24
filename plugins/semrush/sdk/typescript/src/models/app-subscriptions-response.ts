import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1Schema, type Data1 } from "./data1.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

/** Available subscriptions response object */
export type AppSubscriptionsResponse = {
  /** Response metadata */
  meta?: ResponseMeta;
  /** An object describes all app subscriptions */
  data?: Data1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appSubscriptionsResponseSchema: Schema<AppSubscriptionsResponse> =
  s.object<AppSubscriptionsResponse>(
    {
      meta: s.optional(s.lazy(() => responseMetaSchema)),
      data: s.optional(s.lazy(() => data1Schema)),
    },
    { additionalProperties: s.json() },
  );
