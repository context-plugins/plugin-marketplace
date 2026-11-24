import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  descriptiveBotBuilderSpecificationSchema,
  type DescriptiveBotBuilderSpecification,
} from "./descriptive-bot-builder-specification.js";
import {
  sampleUtteranceGenerationSpecificationSchema,
  type SampleUtteranceGenerationSpecification,
} from "./sample-utterance-generation-specification.js";

export type BuildtimeSettings = {
  descriptiveBotBuilder?: DescriptiveBotBuilderSpecification;
  sampleUtteranceGeneration?: SampleUtteranceGenerationSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildtimeSettingsSchema: Schema<BuildtimeSettings> = s.object<BuildtimeSettings>(
  {
    descriptiveBotBuilder: s.optional(s.lazy(() => descriptiveBotBuilderSpecificationSchema)),
    sampleUtteranceGeneration: s.optional(s.lazy(() => sampleUtteranceGenerationSpecificationSchema)),
  },
  { additionalProperties: s.json() },
);
