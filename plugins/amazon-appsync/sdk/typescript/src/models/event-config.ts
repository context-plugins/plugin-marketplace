import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authModeSchema, type AuthMode } from "./auth-mode.js";
import { authProviderSchema, type AuthProvider } from "./auth-provider.js";
import { eventLogConfigSchema, type EventLogConfig } from "./event-log-config.js";

export type EventConfig = {
  /** A list of authorization providers. */
  authProviders: AuthProvider[];
  /** A list of valid authorization modes for the Event API connections. */
  connectionAuthModes: AuthMode[];
  /** A list of valid authorization modes for the Event API publishing. */
  defaultPublishAuthModes: AuthMode[];
  /** A list of valid authorization modes for the Event API subscriptions. */
  defaultSubscribeAuthModes: AuthMode[];
  logConfig?: EventLogConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventConfigSchema: Schema<EventConfig> = s.object<EventConfig>(
  {
    authProviders: s.array(s.lazy(() => authProviderSchema)),
    connectionAuthModes: s.array(s.lazy(() => authModeSchema)),
    defaultPublishAuthModes: s.array(s.lazy(() => authModeSchema)),
    defaultSubscribeAuthModes: s.array(s.lazy(() => authModeSchema)),
    logConfig: s.optional(s.lazy(() => eventLogConfigSchema)),
  },
  { additionalProperties: s.json() },
);
