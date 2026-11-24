import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  nluImprovementSpecificationSchema,
  type NluImprovementSpecification,
} from "./nlu-improvement-specification.js";
import {
  slotResolutionImprovementSpecificationSchema,
  type SlotResolutionImprovementSpecification,
} from "./slot-resolution-improvement-specification.js";

export type RuntimeSettings = {
  slotResolutionImprovement?: SlotResolutionImprovementSpecification;
  nluImprovement?: NluImprovementSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeSettingsSchema: Schema<RuntimeSettings> = s.object<RuntimeSettings>(
  {
    slotResolutionImprovement: s.optional(s.lazy(() => slotResolutionImprovementSpecificationSchema)),
    nluImprovement: s.optional(s.lazy(() => nluImprovementSpecificationSchema)),
  },
  { additionalProperties: s.json() },
);
