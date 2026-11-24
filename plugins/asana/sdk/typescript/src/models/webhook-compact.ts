import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { asanaNamedResourceSchema, type AsanaNamedResource } from "./asana-named-resource.js";

export type WebhookCompact = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookCompactProperties: s.Shape<WebhookCompact> = {
  gid: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  active: s.optional(s.boolean()),
  resource: s.optional(s.lazy(() => asanaNamedResourceSchema)),
  target: s.optional(s.string()),
  _keysMap: {
    resourceType: "resource_type",
  },
};

export const webhookCompactInternalSchema: Schema<WebhookCompact> = s.object<WebhookCompact>(
  webhookCompactProperties,
  { additionalProperties: s.json() },
);

export const webhookCompactSchema: Schema<WebhookCompact> = s.lazySchema(() =>
  s.object<WebhookCompact>(
    {
      ...webhookCompactProperties,
      target: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
