import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error2CloroDevMonitorApiSchema,
  type Error2CloroDevMonitorApi,
} from "./error2-cloro-dev-monitor-api.js";

export type ExternalServiceError = {
  success?: boolean;
  error?: Error2CloroDevMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalServiceErrorSchema: Schema<ExternalServiceError> = s.object<ExternalServiceError>(
  {
    success: s.optional(s.boolean()),
    error: s.optional(s.lazy(() => error2CloroDevMonitorApiSchema)),
  },
  { additionalProperties: s.json() },
);
