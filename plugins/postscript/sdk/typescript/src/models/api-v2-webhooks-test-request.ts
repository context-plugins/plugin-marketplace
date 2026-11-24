import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Event2, event2Schema } from "./event2.js";

export type ApiV2WebhooksTestRequest = {
  /** Webhook subscription event type. @default Event2.ShopTest */
  event?: Event2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2WebhooksTestRequestSchema: Schema<ApiV2WebhooksTestRequest> =
  s.object<ApiV2WebhooksTestRequest>(
    {
      event: s.defaulted(event2Schema, Event2.ShopTest),
    },
    { additionalProperties: s.json() },
  );
