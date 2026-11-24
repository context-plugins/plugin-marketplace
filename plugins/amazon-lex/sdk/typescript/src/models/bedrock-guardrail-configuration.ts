import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BedrockGuardrailConfiguration = {
  /** The unique guardrail id for the Bedrock guardrail configuration. */
  identifier: string;
  /** The guardrail version for the Bedrock guardrail configuration. */
  version: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bedrockGuardrailConfigurationSchema: Schema<BedrockGuardrailConfiguration> =
  s.object<BedrockGuardrailConfiguration>(
    {
      identifier: s.string(),
      version: s.string(),
    },
    { additionalProperties: s.json() },
  );
