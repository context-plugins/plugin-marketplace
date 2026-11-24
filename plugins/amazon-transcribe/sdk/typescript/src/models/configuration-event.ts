import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  postCallAnalyticsSettingsSchema,
  type PostCallAnalyticsSettings,
} from "./post-call-analytics-settings.js";
import {
  transcribestreamingChannelDefinitionSchema,
  type TranscribestreamingChannelDefinition,
} from "./transcribestreaming-channel-definition.js";

export type ConfigurationEvent = {
  /** Indicates which speaker is on which audio channel. */
  channelDefinitions?: TranscribestreamingChannelDefinition[];
  postCallAnalyticsSettings?: PostCallAnalyticsSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const configurationEventSchema: Schema<ConfigurationEvent> = s.object<ConfigurationEvent>(
  {
    channelDefinitions: s.optional(s.array(s.lazy(() => transcribestreamingChannelDefinitionSchema))),
    postCallAnalyticsSettings: s.optional(s.lazy(() => postCallAnalyticsSettingsSchema)),
    _keysMap: {
      channelDefinitions: "ChannelDefinitions",
      postCallAnalyticsSettings: "PostCallAnalyticsSettings",
    },
  },
  { additionalProperties: s.json() },
);
