import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  qInConnectAssistantConfigurationSchema,
  type QInConnectAssistantConfiguration,
} from "./qin-connect-assistant-configuration.js";

export type QInConnectIntentConfiguration = {
  qInConnectAssistantConfiguration?: QInConnectAssistantConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qInConnectIntentConfigurationSchema: Schema<QInConnectIntentConfiguration> =
  s.object<QInConnectIntentConfiguration>(
    {
      qInConnectAssistantConfiguration: s.optional(s.lazy(() => qInConnectAssistantConfigurationSchema)),
    },
    { additionalProperties: s.json() },
  );
