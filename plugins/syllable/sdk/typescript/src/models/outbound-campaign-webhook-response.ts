import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelManagerStatusSchema, type ChannelManagerStatus } from "./channel-manager-status.js";
import { authValueKeysSchema, type AuthValueKeys } from "./unions/auth-value-keys.js";

export type OutboundCampaignWebhookResponse = {
  /** Condition expression evaluated when the trigger fires */
  triggerStatuses: ChannelManagerStatus[];
  /** HTTPS URL to which to send the webhook payload */
  url: string;
  /** HTTP method for the outbound request (POST, PUT, or PATCH) */
  requestMethod: string;
  /** Unique ID for webhook */
  id: number;
  /** Auth value keys (values omitted for security); only hmac_secret is currently supported */
  authValueKeys?: AuthValueKeys;
};

export const outboundCampaignWebhookResponseSchema: Schema<OutboundCampaignWebhookResponse> =
  s.object<OutboundCampaignWebhookResponse>({
    triggerStatuses: s.array(s.lazy(() => channelManagerStatusSchema)),
    url: s.string(),
    requestMethod: s.string(),
    id: s.int(),
    authValueKeys: s.optional(s.lazy(() => authValueKeysSchema)),
    _keysMap: {
      triggerStatuses: "trigger_statuses",
      requestMethod: "request_method",
      authValueKeys: "auth_value_keys",
    },
  });
