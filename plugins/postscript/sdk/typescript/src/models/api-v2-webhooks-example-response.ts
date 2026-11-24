import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventDataSchema, type EventData } from "./event-data.js";

export type ApiV2WebhooksExampleResponse = {
  webhookId?: string;
  resourceType?: string;
  resourceId?: string;
  eventTime?: string;
  event?: string;
  eventData?: EventData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2WebhooksExampleResponseSchema: Schema<ApiV2WebhooksExampleResponse> =
  s.object<ApiV2WebhooksExampleResponse>(
    {
      webhookId: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      resourceId: s.optional(s.string()),
      eventTime: s.optional(s.string()),
      event: s.optional(s.string()),
      eventData: s.optional(s.lazy(() => eventDataSchema)),
      _keysMap: {
        webhookId: "webhook_id",
        resourceType: "resource_type",
        resourceId: "resource_id",
        eventTime: "event_time",
        eventData: "event_data",
      },
    },
    { additionalProperties: s.json() },
  );
