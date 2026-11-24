import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { monitorWebhookSchema, type MonitorWebhook } from "../monitor-webhook.js";

/** Webhook to receive notifications about the monitor's execution. */
export type WebhookParallelAiMonitorApi = MonitorWebhook;

export const webhookParallelAiMonitorApiSchema: Schema<WebhookParallelAiMonitorApi> =
  s.of<WebhookParallelAiMonitorApi>(s.union([s.lazy(() => monitorWebhookSchema)]));
