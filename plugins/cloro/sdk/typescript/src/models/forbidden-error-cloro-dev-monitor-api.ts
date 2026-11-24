import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error1CloroDevMonitorApiSchema,
  type Error1CloroDevMonitorApi,
} from "./error1-cloro-dev-monitor-api.js";

export type ForbiddenErrorCloroDevMonitorApi = {
  success?: boolean;
  error?: Error1CloroDevMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const forbiddenErrorCloroDevMonitorApiSchema: Schema<ForbiddenErrorCloroDevMonitorApi> =
  s.object<ForbiddenErrorCloroDevMonitorApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error1CloroDevMonitorApiSchema)),
    },
    { additionalProperties: s.json() },
  );
