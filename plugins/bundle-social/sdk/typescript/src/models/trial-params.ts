import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { graduationStrategySchema, type GraduationStrategy } from "./graduation-strategy.js";

/** For Reels only. Trial reels are only shared to non-followers. */
export type TrialParams = {
  graduationStrategy: GraduationStrategy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trialParamsSchema: Schema<TrialParams> = s.object<TrialParams>(
  {
    graduationStrategy: graduationStrategySchema,
  },
  { additionalProperties: s.json() },
);
