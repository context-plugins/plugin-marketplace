import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V2AccountsWebhooksRequest = {
  url: string;
  alertEmail?: string;
  secret?: string;
  active?: boolean;
  events: Record<string, boolean>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2AccountsWebhooksRequestSchema: Schema<V2AccountsWebhooksRequest> =
  s.object<V2AccountsWebhooksRequest>(
    {
      url: s.string(),
      alertEmail: s.optional(s.string()),
      secret: s.optional(s.string()),
      active: s.optional(s.boolean()),
      events: s.record(s.string(), s.boolean()),
      _keysMap: {
        alertEmail: "alert_email",
      },
    },
    { additionalProperties: s.json() },
  );
