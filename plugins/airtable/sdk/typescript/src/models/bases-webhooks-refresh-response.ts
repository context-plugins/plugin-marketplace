import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BasesWebhooksRefreshResponse = {
  /** The new expiration time for the webhook. */
  expirationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const basesWebhooksRefreshResponseSchema: Schema<BasesWebhooksRefreshResponse> =
  s.object<BasesWebhooksRefreshResponse>(
    {
      expirationTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
