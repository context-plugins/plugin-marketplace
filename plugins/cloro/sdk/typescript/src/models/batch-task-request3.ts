import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taskType4Schema, type TaskType4 } from "./task-type4.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

export type BatchTaskRequest3 = {
  /** The AI provider to use for this task. */
  taskType: TaskType4;
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

const batchTaskRequest3Properties: s.Shape<BatchTaskRequest3> = {
  taskType: taskType4Schema,
  payload: s.record(s.string(), s.unknown()),
  priority: s.defaulted(s.int(), 1),
  idempotencyKey: s.optional(s.string()),
  webhook: s.optional(s.lazy(() => webhookInternalSchema)),
};

export const batchTaskRequest3InternalSchema: Schema<BatchTaskRequest3> =
  s.object<BatchTaskRequest3>(batchTaskRequest3Properties);

export const batchTaskRequest3Schema: Schema<BatchTaskRequest3> = s.lazySchema(() =>
  s.object<BatchTaskRequest3>({
    ...batchTaskRequest3Properties,
    priority: s.defaulted(s.int().check(s.gte(1), s.lte(10)), 1),
    webhook: s.optional(s.lazy(() => webhookSchema)),
  }),
);
