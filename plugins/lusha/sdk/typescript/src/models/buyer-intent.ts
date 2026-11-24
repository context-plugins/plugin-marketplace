import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyIntentTopicSchema, type CompanyIntentTopic } from "./company-intent-topic.js";

export type BuyerIntent = {
  topicCount: number;
  detectedTopics: CompanyIntentTopic[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buyerIntentSchema: Schema<BuyerIntent> = s.object<BuyerIntent>(
  {
    topicCount: s.int(),
    detectedTopics: s.array(s.lazy(() => companyIntentTopicSchema)),
  },
  { additionalProperties: s.json() },
);
