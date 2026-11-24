import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { frequencySchema, type Frequency } from "./unions/frequency.js";
import {
  metadataParallelAiMonitorApiSchema,
  type MetadataParallelAiMonitorApi,
} from "./unions/metadata-parallel-ai-monitor-api.js";
import { settings2Schema, type Settings2 } from "./unions/settings2.js";
import { type41Schema, type Type41 } from "./unions/type41.js";
import {
  webhookParallelAiMonitorApiSchema,
  type WebhookParallelAiMonitorApi,
} from "./unions/webhook-parallel-ai-monitor-api.js";

/**
 * Request body to update a monitor.
 *
 * Only fields that are explicitly included in the request body are updated. Pass `null` for
 * `webhook` or `metadata` to clear those fields. To update type-specific settings on an
 * `event_stream` monitor, include `type` and `settings`; pass `settings.query` to update the
 * prompt, or `null` for `settings.advanced_settings` to clear it. If `settings` is provided, `type`
 * is required to identify the settings shape. The request must still include at least one field to
 * update; empty updates fail validation.
 */
export type UpdateMonitorRequest = {
  /**
   * Type of the monitor being updated. Required when `settings` is provided; must be `event_stream`
   * (snapshot monitors have no updatable type-specific settings).
   */
  type?: Type41;
  /**
   * Frequency of the monitor. Format: '<number><unit>' where unit is 'h' (hours), 'd' (days), or
   * 'w' (weeks). Must be between 1h and 30d (inclusive).
   */
  frequency?: Frequency;
  /** Webhook to receive notifications about the monitor's execution. */
  webhook?: WebhookParallelAiMonitorApi;
  /**
   * User-provided metadata stored with the monitor and echoed back in webhook notifications and GET
   * responses, so you can map events to objects in your application. Keys: max 16 chars; values:
   * max 512 chars.
   */
  metadata?: MetadataParallelAiMonitorApi;
  /**
   * Type-specific settings to update. Only valid when `type` is `event_stream`. Pass
   * `settings.query` to update the prompt, or `null` for `settings.advanced_settings` to clear it.
   */
  settings?: Settings2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateMonitorRequestSchema: Schema<UpdateMonitorRequest> = s.object<UpdateMonitorRequest>(
  {
    type: s.optional(s.lazy(() => type41Schema)),
    frequency: s.optional(s.lazy(() => frequencySchema)),
    webhook: s.optional(s.lazy(() => webhookParallelAiMonitorApiSchema)),
    metadata: s.optional(s.lazy(() => metadataParallelAiMonitorApiSchema)),
    settings: s.optional(s.lazy(() => settings2Schema)),
  },
  { additionalProperties: s.json() },
);
