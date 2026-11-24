import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyIntentTopicMetadataSchema,
  type CompanyIntentTopicMetadata,
} from "./company-intent-topic-metadata.js";

export type CompanyIntentTopic = {
  topicName: string;
  metadata: CompanyIntentTopicMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyIntentTopicSchema: Schema<CompanyIntentTopic> = s.object<CompanyIntentTopic>(
  {
    topicName: s.string(),
    metadata: companyIntentTopicMetadataSchema,
  },
  { additionalProperties: s.json() },
);
