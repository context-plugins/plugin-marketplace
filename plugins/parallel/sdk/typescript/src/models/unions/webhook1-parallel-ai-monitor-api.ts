import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { monitorWebhookSchema, type MonitorWebhook } from "../monitor-webhook.js";

/** Webhook configuration for the monitor. */
export type Webhook1ParallelAiMonitorApi = MonitorWebhook;

export const webhook1ParallelAiMonitorApiSchema: Schema<Webhook1ParallelAiMonitorApi> =
  s.of<Webhook1ParallelAiMonitorApi>(s.union([s.lazy(() => monitorWebhookSchema)]));
