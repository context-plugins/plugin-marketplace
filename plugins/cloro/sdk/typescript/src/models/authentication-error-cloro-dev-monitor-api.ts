import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error3CloroDevMonitorApiSchema,
  type Error3CloroDevMonitorApi,
} from "./error3-cloro-dev-monitor-api.js";

export type AuthenticationErrorCloroDevMonitorApi = {
  success?: boolean;
  error?: Error3CloroDevMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authenticationErrorCloroDevMonitorApiSchema: Schema<AuthenticationErrorCloroDevMonitorApi> =
  s.object<AuthenticationErrorCloroDevMonitorApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error3CloroDevMonitorApiSchema)),
    },
    { additionalProperties: s.json() },
  );
