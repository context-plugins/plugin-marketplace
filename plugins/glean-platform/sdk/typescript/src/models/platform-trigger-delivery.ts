import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformTriggerAuthSchema, type PlatformTriggerAuth } from "./platform-trigger-auth.js";

export type PlatformTriggerDelivery = {
  /** HTTPS URL that signed events are delivered to. */
  webhookUrl: string;
  /**
   * Optional caller credential sent as an HTTP auth header on each delivery, in addition to the
   * HMAC signature. Lets the receiving endpoint authenticate the request. On update, omit `auth` to
   * preserve the existing credential; there is no in-place removal — recreate the trigger to remove
   * auth.
   */
  auth?: PlatformTriggerAuth;
};

export const platformTriggerDeliverySchema: Schema<PlatformTriggerDelivery> =
  s.object<PlatformTriggerDelivery>({
    webhookUrl: s.string(),
    auth: s.optional(s.lazy(() => platformTriggerAuthSchema)),
    _keysMap: {
      webhookUrl: "webhook_url",
    },
  });
