import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorCloroDevMonitorApiSchema,
  type ErrorCloroDevMonitorApi,
} from "./error-cloro-dev-monitor-api.js";

export type ConcurrentLimitError = {
  success?: boolean;
  error?: ErrorCloroDevMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const concurrentLimitErrorSchema: Schema<ConcurrentLimitError> = s.object<ConcurrentLimitError>(
  {
    success: s.optional(s.boolean()),
    error: s.optional(s.lazy(() => errorCloroDevMonitorApiSchema)),
  },
  { additionalProperties: s.json() },
);
