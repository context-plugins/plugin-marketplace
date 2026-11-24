import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authModeSchema, type AuthMode } from "./auth-mode.js";
import { handlerConfigsSchema, type HandlerConfigs } from "./handler-configs.js";

export type ChannelNamespace = {
  /** The Api ID. */
  apiId?: string;
  /** The name of the channel namespace. This name must be unique within the Api. */
  name?: string;
  /**
   * The authorization mode to use for subscribing to messages on the channel namespace. This
   * configuration overrides the default Apiauthorization configuration.
   */
  subscribeAuthModes?: AuthMode[];
  /**
   * The authorization mode to use for publishing messages on the channel namespace. This
   * configuration overrides the default Apiauthorization configuration.
   */
  publishAuthModes?: AuthMode[];
  /**
   * The event handler functions that run custom business logic to process published events and
   * subscribe requests.
   */
  codeHandlers?: string;
  tags?: Record<string, string>;
  /** The Amazon Resource Name (ARN) for the ChannelNamespace. */
  channelNamespaceArn?: string;
  /** The date and time that the ChannelNamespace was created. */
  created?: Date;
  /** The date and time that the ChannelNamespace was last changed. */
  lastModified?: Date;
  handlerConfigs?: HandlerConfigs;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const channelNamespaceSchema: Schema<ChannelNamespace> = s.object<ChannelNamespace>(
  {
    apiId: s.optional(s.string()),
    name: s.optional(s.string()),
    subscribeAuthModes: s.optional(s.array(s.lazy(() => authModeSchema))),
    publishAuthModes: s.optional(s.array(s.lazy(() => authModeSchema))),
    codeHandlers: s.optional(s.string()),
    tags: s.optional(s.record(s.string(), s.string())),
    channelNamespaceArn: s.optional(s.string()),
    created: s.optional(s.dateTime()),
    lastModified: s.optional(s.dateTime()),
    handlerConfigs: s.optional(s.lazy(() => handlerConfigsSchema)),
  },
  { additionalProperties: s.json() },
);
