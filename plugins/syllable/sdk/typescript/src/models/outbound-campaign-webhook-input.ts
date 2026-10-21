import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelManagerStatusSchema, type ChannelManagerStatus } from "./channel-manager-status.js";
import { authValuesSchema, type AuthValues } from "./unions/auth-values.js";
import { id4Schema, type Id4 } from "./unions/id4.js";

export type OutboundCampaignWebhookInput = {
  /** Condition expression evaluated when the trigger fires */
  triggerStatuses: ChannelManagerStatus[];
  /** HTTPS URL to which to send the webhook payload */
  url: string;
  /** HTTP method for the outbound request (POST, PUT, or PATCH) */
  requestMethod: string;
  /** Unique ID for webhook, if updating an existing webhook */
  id?: Id4;
  /**
   * Optional dict of auth values. Currently, only the key "hmac_secret" is allowed; value must be
   * standard Base64 (RFC 4648) decoding to 32–512 bytes of key material. On update, leave a value
   * for a given key null and the stored value for that key is kept. (If a key is omitted entirely,
   * any existing value for that key is removed.)
   */
  authValues?: AuthValues;
};

export const outboundCampaignWebhookInputSchema: Schema<OutboundCampaignWebhookInput> =
  s.object<OutboundCampaignWebhookInput>({
    triggerStatuses: s.array(s.lazy(() => channelManagerStatusSchema)),
    url: s.string(),
    requestMethod: s.string(),
    id: s.optional(s.lazy(() => id4Schema)),
    authValues: s.optional(s.lazy(() => authValuesSchema)),
    _keysMap: {
      triggerStatuses: "trigger_statuses",
      requestMethod: "request_method",
      authValues: "auth_values",
    },
  });
