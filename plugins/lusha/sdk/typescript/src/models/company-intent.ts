import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyIntentTopicSchema, type CompanyIntentTopic } from "./company-intent-topic.js";

export type CompanyIntent = {
  detectedTopics: CompanyIntentTopic[];
  topicCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyIntentSchema: Schema<CompanyIntent> = s.object<CompanyIntent>(
  {
    detectedTopics: s.array(s.lazy(() => companyIntentTopicSchema)),
    topicCount: s.float64(),
  },
  { additionalProperties: s.json() },
);
