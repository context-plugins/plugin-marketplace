import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusFellowDeveloperWebhooksApiSchema,
  type StatusFellowDeveloperWebhooksApi,
} from "./status-fellow-developer-webhooks-api.js";

/** Request body for updating a webhook. All fields are optional. */
export type UpdateWebhookRequest = {
  /** The URL endpoint that will receive webhook POST requests */
  url?: string | null;
  /**
   * List of event types to subscribe to. Valid values: 'ai_note.shared_to_channel',
   * 'ai_note.generated', 'action_item.assigned', 'action_item.completed'.
   */
  enabledEvents?: string[] | null;
  /** Optional description for this webhook endpoint */
  description?: string | null;
  /** Webhook status. Valid values: 'active', 'inactive' */
  status?: StatusFellowDeveloperWebhooksApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateWebhookRequestSchema: Schema<UpdateWebhookRequest> = s.object<UpdateWebhookRequest>(
  {
    url: s.optionalNullable(s.string()),
    enabledEvents: s.optionalNullable(s.array(s.string())),
    description: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.lazy(() => statusFellowDeveloperWebhooksApiSchema)),
    _keysMap: {
      enabledEvents: "enabled_events",
    },
  },
  { additionalProperties: s.json() },
);
