import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

/** How CallNode authenticates to your webhook endpoint. */
export type WebhookAuthCallnodeIoPhoneNumbersApi = {
  type: Type2;
  /** Header name when `type` is `header`. */
  headerName?: string;
  /** The secret, token, or `user:pass` pair, depending on `type`. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookAuthCallnodeIoPhoneNumbersApiSchema: Schema<WebhookAuthCallnodeIoPhoneNumbersApi> =
  s.object<WebhookAuthCallnodeIoPhoneNumbersApi>(
    {
      type: type2Schema,
      headerName: s.optional(s.string()),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
