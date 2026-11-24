import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GatewayAsyncTaskResponse = {
  commandId?: string;
  status?: string;
  taskId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gatewayAsyncTaskResponseSchema: Schema<GatewayAsyncTaskResponse> =
  s.object<GatewayAsyncTaskResponse>(
    {
      commandId: s.optional(s.string()),
      status: s.optional(s.string()),
      taskId: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
