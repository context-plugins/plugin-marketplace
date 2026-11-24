import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bedrockModelSpecificationSchema,
  type BedrockModelSpecification,
} from "./bedrock-model-specification.js";

export type SampleUtteranceGenerationSpecification = {
  /** Specifies whether to enable sample utterance generation or not. */
  enabled: boolean;
  bedrockModelSpecification?: BedrockModelSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sampleUtteranceGenerationSpecificationSchema: Schema<SampleUtteranceGenerationSpecification> =
  s.object<SampleUtteranceGenerationSpecification>(
    {
      enabled: s.boolean(),
      bedrockModelSpecification: s.optional(s.lazy(() => bedrockModelSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
