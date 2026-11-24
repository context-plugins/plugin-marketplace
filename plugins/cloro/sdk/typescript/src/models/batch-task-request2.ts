import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taskType2Schema, type TaskType2 } from "./task-type2.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

export type BatchTaskRequest2 = {
  /** The AI provider to use for this task. */
  taskType: TaskType2;
  /**
   * The provider's request body, validated against the same schema as its sync endpoint (for
   * example `ChatGPTMonitorRequest`). That makes `country` required here too, or `gl` on the Google
   * endpoints. For `GOOGLE_PRODUCT`, send only `productResultToken`.
   */
  payload: Record<string, unknown>;
  /** Task priority level (1-10). Higher numbers are processed first. Defaults to 1. @default 1 */
  priority?: number;
  /** Unique string to prevent duplicate task creation. Must be unique across your account. */
  idempotencyKey?: string;
  /** Webhook configuration for task completion notification. */
  webhook?: Webhook;
};

const batchTaskRequest2Properties: s.Shape<BatchTaskRequest2> = {
  taskType: taskType2Schema,
  payload: s.record(s.string(), s.unknown()),
  priority: s.defaulted(s.int(), 1),
  idempotencyKey: s.optional(s.string()),
  webhook: s.optional(s.lazy(() => webhookInternalSchema)),
};

export const batchTaskRequest2InternalSchema: Schema<BatchTaskRequest2> =
  s.object<BatchTaskRequest2>(batchTaskRequest2Properties);

export const batchTaskRequest2Schema: Schema<BatchTaskRequest2> = s.lazySchema(() =>
  s.object<BatchTaskRequest2>({
    ...batchTaskRequest2Properties,
    priority: s.defaulted(s.int().check(s.gte(1), s.lte(10)), 1),
    webhook: s.optional(s.lazy(() => webhookSchema)),
  }),
);
