import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error4CloroDevMonitorApiSchema,
  type Error4CloroDevMonitorApi,
} from "./error4-cloro-dev-monitor-api.js";

export type ValidationErrorErrorCloroDevMonitorApi = {
  success?: boolean;
  error?: Error4CloroDevMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationErrorErrorCloroDevMonitorApiSchema: Schema<ValidationErrorErrorCloroDevMonitorApi> =
  s.object<ValidationErrorErrorCloroDevMonitorApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error4CloroDevMonitorApiSchema)),
    },
    { additionalProperties: s.json() },
  );
