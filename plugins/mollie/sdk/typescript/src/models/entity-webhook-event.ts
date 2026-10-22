import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { embeddedSchema, type Embedded } from "./embedded.js";
import { links31Schema, type Links31 } from "./links31.js";
import {
  webhookEventTypesResponseSchema,
  type WebhookEventTypesResponse,
} from "./webhook-event-types-response.js";

export type EntityWebhookEvent = {
  /**
   * Indicates the response contains a webhook event object. Will always contain the string `event`
   * for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this event. */
  id: string;
  type: WebhookEventTypesResponse;
  /** The entity token that triggered the event */
  entityId: string;
  /** The event's date time of creation. */
  createdAt: string;
  /** Full payload of the event. */
  embedded?: Embedded | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links31;
};

export const entityWebhookEventSchema: Schema<EntityWebhookEvent> = s.object<EntityWebhookEvent>({
  resource: s.string(),
  id: s.string(),
  type: webhookEventTypesResponseSchema,
  entityId: s.string(),
  createdAt: s.string(),
  embedded: s.optionalNullable(s.lazy(() => embeddedSchema)),
  links: links31Schema,
  _keysMap: {
    embedded: "_embedded",
    links: "_links",
  },
});
