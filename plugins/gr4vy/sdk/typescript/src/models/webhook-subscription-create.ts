import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication1Schema, type Authentication1 } from "./unions/authentication1.js";

export type WebhookSubscriptionCreate = {
  /** Flag to determine whether this subscription should be sent webhook payloads. @default true */
  active?: boolean;
  /** URL to send webhook payloads. */
  url: string;
  /** Optional authentication configuration for webhook requests. */
  authentication?: Authentication1;
};

export const webhookSubscriptionCreateSchema: Schema<WebhookSubscriptionCreate> =
  s.object<WebhookSubscriptionCreate>({
    active: s.defaulted(s.boolean(), true),
    url: s.string(),
    authentication: s.optional(s.lazy(() => authentication1Schema)),
  });
