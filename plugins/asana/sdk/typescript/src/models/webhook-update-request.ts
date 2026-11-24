import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./filter.js";

export type WebhookUpdateRequest = {
  /**
   * An array of WebhookFilter objects to specify a whitelist of filters to apply to events from
   * this webhook. If a webhook event passes any of the filters the event will be delivered;
   * otherwise no event will be sent to the receiving server.
   */
  filters?: Filter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookUpdateRequestSchema: Schema<WebhookUpdateRequest> = s.object<WebhookUpdateRequest>(
  {
    filters: s.optional(s.array(s.lazy(() => filterSchema))),
  },
  { additionalProperties: s.json() },
);
