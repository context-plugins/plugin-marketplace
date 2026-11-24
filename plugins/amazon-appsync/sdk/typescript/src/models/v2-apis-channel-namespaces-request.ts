import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authModeSchema, type AuthMode } from "./auth-mode.js";
import { handlerConfigsSchema, type HandlerConfigs } from "./handler-configs.js";

export type V2ApisChannelNamespacesRequest = {
  /** The name of the ChannelNamespace. This name must be unique within the Api */
  name: string;
  /**
   * The authorization mode to use for subscribing to messages on the channel namespace. This
   * configuration overrides the default Api authorization configuration.
   */
  subscribeAuthModes?: AuthMode[];
  /**
   * The authorization mode to use for publishing messages on the channel namespace. This
   * configuration overrides the default Api authorization configuration.
   */
  publishAuthModes?: AuthMode[];
  /**
   * The event handler functions that run custom business logic to process published events and
   * subscribe requests.
   */
  codeHandlers?: string;
  tags?: Record<string, string>;
  handlerConfigs?: HandlerConfigs;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2ApisChannelNamespacesRequestSchema: Schema<V2ApisChannelNamespacesRequest> =
  s.object<V2ApisChannelNamespacesRequest>(
    {
      name: s.string(),
      subscribeAuthModes: s.optional(s.array(s.lazy(() => authModeSchema))),
      publishAuthModes: s.optional(s.array(s.lazy(() => authModeSchema))),
      codeHandlers: s.optional(s.string()),
      tags: s.optional(s.record(s.string(), s.string())),
      handlerConfigs: s.optional(s.lazy(() => handlerConfigsSchema)),
    },
    { additionalProperties: s.json() },
  );
