import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { format1Schema, type Format1 } from "./format1.js";

export type ApiV1WebhookEndpointsRequest1 = {
  /** Where to POST each event. HTTPS, on a public host. */
  url?: string;
  /** What the endpoint is for, as an administrator will read it in the list. */
  description?: string | null;
  /**
   * The events to send. Empty means every event, including any added later, except the opt-in ones
   * (gate.* lifecycle, task.blocked, side_task.completed, context.changed, audit.event), which
   * arrive only when named.
   */
  events?: Event[];
  /**
   * json: the signed envelope. slack: Block Kit for an Incoming Webhook. teams: an Adaptive Card
   * for a Workflows webhook. discord: an embed with a link button for a channel webhook.
   * workspace_studio: fires a Google Workspace Studio starter; made by the Deliverd add-on, with
   * runAs.
   */
  format?: Format1;
  /**
   * Turn deliveries off or back on. Turning one back on clears its run of failures, so an endpoint
   * paused after twenty is not paused again by the next.
   */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1WebhookEndpointsRequest1Properties: s.Shape<ApiV1WebhookEndpointsRequest1> = {
  url: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  format: s.optional(s.lazy(() => format1Schema)),
  enabled: s.optional(s.boolean()),
};

export const apiV1WebhookEndpointsRequest1InternalSchema: Schema<ApiV1WebhookEndpointsRequest1> =
  s.object<ApiV1WebhookEndpointsRequest1>(apiV1WebhookEndpointsRequest1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1WebhookEndpointsRequest1Schema: Schema<ApiV1WebhookEndpointsRequest1> = s.lazySchema(() =>
  s.object<ApiV1WebhookEndpointsRequest1>(
    {
      ...apiV1WebhookEndpointsRequest1Properties,
      url: s.optional(s.string().check(s.url())),
      description: s.optionalNullable(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
