import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gatewayAsyncTaskResponseSchema,
  type GatewayAsyncTaskResponse,
} from "./gateway-async-task-response.js";

export type Response = {
  data?: GatewayAsyncTaskResponse;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSchema: Schema<Response> = s.object<Response>(
  {
    data: s.optional(s.lazy(() => gatewayAsyncTaskResponseSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
