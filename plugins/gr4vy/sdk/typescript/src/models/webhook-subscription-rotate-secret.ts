import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { delta1Schema, type Delta1 } from "./unions/delta1.js";

export type WebhookSubscriptionRotateSecret = {
  /**
   * Delta time in minutes to expire existing secret if any. If not set or set to zero it will
   * expire immediately.
   */
  delta?: Delta1;
};

export const webhookSubscriptionRotateSecretSchema: Schema<WebhookSubscriptionRotateSecret> =
  s.object<WebhookSubscriptionRotateSecret>({
    delta: s.optional(s.lazy(() => delta1Schema)),
  });
