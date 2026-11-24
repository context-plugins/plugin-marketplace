import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyIntentTopicMetadata = {
  topicScore: number;
  topicTrend: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyIntentTopicMetadataSchema: Schema<CompanyIntentTopicMetadata> =
  s.object<CompanyIntentTopicMetadata>(
    {
      topicScore: s.float64(),
      topicTrend: s.string(),
    },
    { additionalProperties: s.json() },
  );
