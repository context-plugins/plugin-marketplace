import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypesSchema, type EventTypes } from "./unions/event-types.js";

export type V2WebhooksRequest = {
  /** A name that identifies the webhook. */
  name: string;
  /** The URL Mollie will send the events to. This URL must be publicly accessible. */
  url: string;
  eventTypes: EventTypes;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * You can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean;
};

export const v2WebhooksRequestSchema: Schema<V2WebhooksRequest> = s.object<V2WebhooksRequest>({
  name: s.string(),
  url: s.string(),
  eventTypes: eventTypesSchema,
  testmode: s.optional(s.boolean()),
});
