import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The feedback provided by the customer. */
export const Feedback = {
  ValidCollection: "VALID_COLLECTION",
  RecommendationUseful: "RECOMMENDATION_USEFUL",
  AlertTooSensitive: "ALERT_TOO_SENSITIVE",
  DataNoisyAnomaly: "DATA_NOISY_ANOMALY",
  DataIncorrect: "DATA_INCORRECT",
} as const;
export type Feedback = (typeof Feedback)[keyof typeof Feedback] | (string & {});

export const feedbackSchema: EnumSchema<Feedback> = s.enumOf<Feedback>(Feedback);
