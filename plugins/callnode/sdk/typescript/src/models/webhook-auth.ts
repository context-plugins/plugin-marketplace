import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeCallnodeIoOutboundCallsApiSchema,
  type TypeCallnodeIoOutboundCallsApi,
} from "./type-callnode-io-outbound-calls-api.js";

/** How CallNode authenticates to your webhook endpoint. */
export type WebhookAuth = {
  type: TypeCallnodeIoOutboundCallsApi;
  /** Header name when `type` is `header`. */
  headerName?: string;
  /** The secret, token, or `user:pass` pair, depending on `type`. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookAuthSchema: Schema<WebhookAuth> = s.object<WebhookAuth>(
  {
    type: typeCallnodeIoOutboundCallsApiSchema,
    headerName: s.optional(s.string()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
