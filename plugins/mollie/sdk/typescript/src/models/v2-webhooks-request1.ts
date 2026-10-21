import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypesSchema, type EventTypes } from "./unions/event-types.js";

export type V2WebhooksRequest1 = {
  /** A name that identifies the webhook. */
  name?: string;
  /** The URL Mollie will send the events to. This URL must be publicly accessible. */
  url?: string;
  eventTypes?: EventTypes;
  /**
   * Whether the entity was created in test mode or live mode. This field does not update the mode
   * of the entity.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean;
};

export const v2WebhooksRequest1Schema: Schema<V2WebhooksRequest1> = s.object<V2WebhooksRequest1>({
  name: s.optional(s.string()),
  url: s.optional(s.string()),
  eventTypes: s.optional(s.lazy(() => eventTypesSchema)),
  testmode: s.optional(s.boolean()),
});
