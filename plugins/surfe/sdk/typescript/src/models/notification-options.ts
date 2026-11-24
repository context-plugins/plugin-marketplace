import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotificationOptions = {
  webhookUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const notificationOptionsProperties: s.Shape<NotificationOptions> = {
  webhookUrl: s.optional(s.string()),
};

export const notificationOptionsInternalSchema: Schema<NotificationOptions> = s.object<NotificationOptions>(
  notificationOptionsProperties,
  { additionalProperties: s.json() },
);

export const notificationOptionsSchema: Schema<NotificationOptions> = s.lazySchema(() =>
  s.object<NotificationOptions>(
    {
      ...notificationOptionsProperties,
      webhookUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
