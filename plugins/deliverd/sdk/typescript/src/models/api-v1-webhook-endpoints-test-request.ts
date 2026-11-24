import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Event6, event6Schema } from "./event6.js";

export type ApiV1WebhookEndpointsTestRequest = {
  /**
   * Which event to send, with obviously fake ids and "test": true beside it. Default
   * report.published.
   *
   * @default Event6.ReportPublished
   */
  event?: Event6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WebhookEndpointsTestRequestSchema: Schema<ApiV1WebhookEndpointsTestRequest> =
  s.object<ApiV1WebhookEndpointsTestRequest>(
    {
      event: s.defaulted(event6Schema, Event6.ReportPublished),
    },
    { additionalProperties: s.json() },
  );
