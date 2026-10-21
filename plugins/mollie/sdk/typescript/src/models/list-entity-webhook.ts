import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links34Schema, type Links34 } from "./links34.js";
import { modeSchema, type Mode } from "./mode.js";
import {
  webhookEventTypesResponseSchema,
  type WebhookEventTypesResponse,
} from "./webhook-event-types-response.js";
import { webhookStatusSchema, type WebhookStatus } from "./webhook-status.js";

export type ListEntityWebhook = {
  /**
   * Indicates the response contains a webhook subscription object. Will always contain the string
   * `webhook` for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this subscription. */
  id: string;
  /** The subscription's events destination. */
  url: string;
  /** The identifier uniquely referring to the profile that created the subscription. */
  profileId: string | null;
  /** The subscription's date time of creation. */
  createdAt: string;
  /** The subscription's name. */
  name: string;
  /** The events types that are subscribed. */
  eventTypes: WebhookEventTypesResponse[];
  /** The subscription's current status. */
  status: WebhookStatus;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links34;
};

export const listEntityWebhookSchema: Schema<ListEntityWebhook> = s.object<ListEntityWebhook>({
  resource: s.string(),
  id: s.string(),
  url: s.string(),
  profileId: s.nullable(s.string()),
  createdAt: s.string(),
  name: s.string(),
  eventTypes: s.array(s.lazy(() => webhookEventTypesResponseSchema)),
  status: webhookStatusSchema,
  mode: modeSchema,
  links: links34Schema,
  _keysMap: {
    links: "_links",
  },
});
