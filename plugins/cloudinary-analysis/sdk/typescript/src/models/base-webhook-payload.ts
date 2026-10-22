import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorObjectSchema, type ErrorObject } from "./error-object.js";
import { limitsObjectSchema, type LimitsObject } from "./limits-object.js";
import { operationTypeSchema, type OperationType } from "./operation-type.js";

/** Base payload for webhook notifications */
export type BaseWebhookPayload = {
  error?: ErrorObject | null;
  limits?: LimitsObject | null;
  operationName?: string;
  operationType?: OperationType;
  notificationType?: string;
  requestId?: string;
  taskId?: string;
  httpStatus?: number;
};

export const baseWebhookPayloadSchema: Schema<BaseWebhookPayload> = s.object<BaseWebhookPayload>({
  error: s.optionalNullable(s.lazy(() => errorObjectSchema)),
  limits: s.optionalNullable(s.lazy(() => limitsObjectSchema)),
  operationName: s.optional(s.string()),
  operationType: s.optional(s.lazy(() => operationTypeSchema)),
  notificationType: s.optional(s.string()),
  requestId: s.optional(s.string()),
  taskId: s.optional(s.string()),
  httpStatus: s.optional(s.int()),
  _keysMap: {
    operationName: "operation_name",
    operationType: "operation_type",
    notificationType: "notification_type",
    requestId: "request_id",
    taskId: "task_id",
    httpStatus: "http_status",
  },
});
