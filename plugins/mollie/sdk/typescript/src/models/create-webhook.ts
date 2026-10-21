import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links13Schema, type Links13 } from "./links13.js";
import { modeSchema, type Mode } from "./mode.js";
import {
  webhookEventTypesResponseSchema,
  type WebhookEventTypesResponse,
} from "./webhook-event-types-response.js";
import { webhookStatusSchema, type WebhookStatus } from "./webhook-status.js";

export type CreateWebhook = {
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
  /** The subscription's secret. */
  webhookSecret: string;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links13;
};

export const createWebhookSchema: Schema<CreateWebhook> = s.object<CreateWebhook>({
  resource: s.string(),
  id: s.string(),
  url: s.string(),
  profileId: s.nullable(s.string()),
  createdAt: s.string(),
  name: s.string(),
  eventTypes: s.array(s.lazy(() => webhookEventTypesResponseSchema)),
  status: webhookStatusSchema,
  mode: modeSchema,
  webhookSecret: s.string(),
  links: links13Schema,
  _keysMap: {
    links: "_links",
  },
});
