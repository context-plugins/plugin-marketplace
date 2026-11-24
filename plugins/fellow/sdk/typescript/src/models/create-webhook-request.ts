import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  ScopeFellowDeveloperWebhooksApi,
  scopeFellowDeveloperWebhooksApiSchema,
} from "./scope-fellow-developer-webhooks-api.js";
import {
  StatusFellowDeveloperWebhooksApi,
  statusFellowDeveloperWebhooksApiSchema,
} from "./status-fellow-developer-webhooks-api.js";

/** Request body for creating a webhook. */
export type CreateWebhookRequest = {
  /** The URL endpoint that will receive webhook POST requests */
  url: string;
  /**
   * List of event types to subscribe to. Valid values: 'ai_note.shared_to_channel',
   * 'ai_note.generated', 'action_item.assigned', 'action_item.completed'.
   */
  enabledEvents: string[];
  /** Optional description for this webhook endpoint */
  description?: string;
  /**
   * Webhook status. Valid values: 'active', 'inactive'
   *
   * @default StatusFellowDeveloperWebhooksApi.Active
   */
  status?: StatusFellowDeveloperWebhooksApi;
  /**
   * Who the webhook belongs to. 'user' is the authenticated user, the default and the existing
   * behaviour. 'workspace' is the whole account: it receives every matching event with no per-user
   * filter, and each event is delivered once rather than once per attendee. Creating one requires a
   * privileged API key.
   *
   * @default ScopeFellowDeveloperWebhooksApi.User
   */
  scope?: ScopeFellowDeveloperWebhooksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createWebhookRequestSchema: Schema<CreateWebhookRequest> = s.object<CreateWebhookRequest>(
  {
    url: s.string(),
    enabledEvents: s.array(s.string()),
    description: s.optional(s.string()),
    status: s.defaulted(statusFellowDeveloperWebhooksApiSchema, StatusFellowDeveloperWebhooksApi.Active),
    scope: s.defaulted(scopeFellowDeveloperWebhooksApiSchema, ScopeFellowDeveloperWebhooksApi.User),
    _keysMap: {
      enabledEvents: "enabled_events",
    },
  },
  { additionalProperties: s.json() },
);
