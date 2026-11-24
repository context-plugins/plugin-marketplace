import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2WebhooksRequest1 = {
  /** Destination URL for webhook deliveries (HTTPS only). */
  callbackUrl?: string;
  /** Custom key:value pairs to be sent as headers in every callback. */
  headers?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2WebhooksRequest1Schema: Schema<ApiV2WebhooksRequest1> = s.object<ApiV2WebhooksRequest1>(
  {
    callbackUrl: s.optional(s.string()),
    headers: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      callbackUrl: "callback_url",
    },
  },
  { additionalProperties: s.json() },
);
