import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asanaNamedResourceSchema, type AsanaNamedResource } from "./asana-named-resource.js";
import { filterSchema, type Filter } from "./filter.js";

export type WebhookResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /**
   * If true, the webhook will send events - if false it is considered inactive and will not
   * generate events.
   */
  active?: boolean;
  resource?: AsanaNamedResource;
  /** The URL to receive the HTTP POST. */
  target?: string;
  /** The time at which this resource was created. */
  createdAt?: Date;
  /** The timestamp when the webhook last received an error when sending an event to the target. */
  lastFailureAt?: Date;
  /**
   * The contents of the last error response sent to the webhook when attempting to deliver events
   * to the target.
   */
  lastFailureContent?: string;
  /** The timestamp when the webhook last successfully sent an event to the target. */
  lastSuccessAt?: Date;
  /**
   * Whitelist of filters to apply to events from this webhook. If a webhook event passes any of the
   * filters the event will be delivered; otherwise no event will be sent to the receiving server.
   */
  filters?: Filter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookResponseProperties: s.Shape<WebhookResponse> = {
  gid: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  active: s.optional(s.boolean()),
  resource: s.optional(s.lazy(() => asanaNamedResourceSchema)),
  target: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  lastFailureAt: s.optional(s.dateTime()),
  lastFailureContent: s.optional(s.string()),
  lastSuccessAt: s.optional(s.dateTime()),
  filters: s.optional(s.array(s.lazy(() => filterSchema))),
  _keysMap: {
    resourceType: "resource_type",
    createdAt: "created_at",
    lastFailureAt: "last_failure_at",
    lastFailureContent: "last_failure_content",
    lastSuccessAt: "last_success_at",
  },
};

export const webhookResponseInternalSchema: Schema<WebhookResponse> = s.object<WebhookResponse>(
  webhookResponseProperties,
  { additionalProperties: s.json() },
);

export const webhookResponseSchema: Schema<WebhookResponse> = s.lazySchema(() =>
  s.object<WebhookResponse>(
    {
      ...webhookResponseProperties,
      target: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
