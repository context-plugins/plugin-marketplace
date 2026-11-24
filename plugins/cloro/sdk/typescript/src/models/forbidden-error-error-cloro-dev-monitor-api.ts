import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error1CloroDevMonitorApiSchema,
  type Error1CloroDevMonitorApi,
} from "./error1-cloro-dev-monitor-api.js";

export type ForbiddenErrorErrorCloroDevMonitorApi = {
  success?: boolean;
  error?: Error1CloroDevMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const forbiddenErrorErrorCloroDevMonitorApiSchema: Schema<ForbiddenErrorErrorCloroDevMonitorApi> =
  s.object<ForbiddenErrorErrorCloroDevMonitorApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error1CloroDevMonitorApiSchema)),
    },
    { additionalProperties: s.json() },
  );
