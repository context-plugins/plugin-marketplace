import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bedrockGuardrailConfigurationSchema,
  type BedrockGuardrailConfiguration,
} from "./bedrock-guardrail-configuration.js";
import { traceStatusSchema, type TraceStatus } from "./trace-status.js";

export type BedrockModelSpecification = {
  /** The ARN of the foundation model used in descriptive bot building. */
  modelArn: string;
  guardrail?: BedrockGuardrailConfiguration;
  /** The Bedrock trace status in the Bedrock model specification details. */
  traceStatus?: TraceStatus;
  /** The custom prompt used in the Bedrock model specification details. */
  customPrompt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bedrockModelSpecificationSchema: Schema<BedrockModelSpecification> =
  s.object<BedrockModelSpecification>(
    {
      modelArn: s.string(),
      guardrail: s.optional(s.lazy(() => bedrockGuardrailConfigurationSchema)),
      traceStatus: s.optional(s.lazy(() => traceStatusSchema)),
      customPrompt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
