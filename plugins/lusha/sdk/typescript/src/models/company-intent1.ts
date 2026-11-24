import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyIntentTopicSchema, type CompanyIntentTopic } from "./company-intent-topic.js";

/**
 * A list of detected intent topics related to the company based on your account's mapped topics.
 */
export type CompanyIntent1 = {
  detectedTopics: CompanyIntentTopic[];
  topicCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyIntent1Schema: Schema<CompanyIntent1> = s.object<CompanyIntent1>(
  {
    detectedTopics: s.array(s.lazy(() => companyIntentTopicSchema)),
    topicCount: s.float64(),
  },
  { additionalProperties: s.json() },
);
