import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { Format1, format1Schema } from "./format1.js";

export type ApiV1WebhookEndpointsRequest = {
  /** Where to POST each event. HTTPS, on a public host. */
  url: string;
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
   *
   * @default Format1.Json
   */
  format?: Format1;
  /** workspace_studio only: the Google address of the person whose flow this starter belongs to. */
  runAs?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1WebhookEndpointsRequestProperties: s.Shape<ApiV1WebhookEndpointsRequest> = {
  url: s.string(),
  description: s.optionalNullable(s.string()),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  format: s.defaulted(format1Schema, Format1.Json),
  runAs: s.optional(s.string()),
};

export const apiV1WebhookEndpointsRequestInternalSchema: Schema<ApiV1WebhookEndpointsRequest> =
  s.object<ApiV1WebhookEndpointsRequest>(apiV1WebhookEndpointsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1WebhookEndpointsRequestSchema: Schema<ApiV1WebhookEndpointsRequest> = s.lazySchema(() =>
  s.object<ApiV1WebhookEndpointsRequest>(
    {
      ...apiV1WebhookEndpointsRequestProperties,
      url: s.string().check(s.url()),
      description: s.optionalNullable(s.string().check(s.maxLength(200))),
      runAs: s.optional(s.string().check(s.maxLength(254), s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
