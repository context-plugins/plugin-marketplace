import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bedrockModelSpecificationSchema,
  type BedrockModelSpecification,
} from "./bedrock-model-specification.js";

export type SlotResolutionImprovementSpecification = {
  /** Specifies whether assisted slot resolution is turned on or off. */
  enabled: boolean;
  bedrockModelSpecification?: BedrockModelSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotResolutionImprovementSpecificationSchema: Schema<SlotResolutionImprovementSpecification> =
  s.object<SlotResolutionImprovementSpecification>(
    {
      enabled: s.boolean(),
      bedrockModelSpecification: s.optional(s.lazy(() => bedrockModelSpecificationSchema)),
    },
    { additionalProperties: s.json() },
  );
