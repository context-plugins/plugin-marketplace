import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QInConnectAssistantConfiguration = {
  /** The assistant Arn details of the Qinconnect assistant configuration. */
  assistantArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qInConnectAssistantConfigurationSchema: Schema<QInConnectAssistantConfiguration> =
  s.object<QInConnectAssistantConfiguration>(
    {
      assistantArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
