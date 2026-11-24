import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recommendationRelatedAnomalySchema,
  type RecommendationRelatedAnomaly,
} from "./recommendation-related-anomaly.js";
import {
  recommendationRelatedEventSchema,
  type RecommendationRelatedEvent,
} from "./recommendation-related-event.js";

export type Recommendation = {
  /** A description of the problem. */
  description?: string;
  /** A hyperlink to information to help you address the problem. */
  link?: string;
  /** The name of the recommendation. */
  name?: string;
  /** The reason DevOps Guru flagged the anomalous behavior as a problem. */
  reason?: string;
  /**
   * Events that are related to the problem. Use these events to learn more about what's happening
   * and to help address the issue.
   */
  relatedEvents?: RecommendationRelatedEvent[];
  /**
   * Anomalies that are related to the problem. Use these Anomalies to learn more about what's
   * happening and to help address the issue.
   */
  relatedAnomalies?: RecommendationRelatedAnomaly[];
  /** The category type of the recommendation. */
  category?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationSchema: Schema<Recommendation> = s.object<Recommendation>(
  {
    description: s.optional(s.string()),
    link: s.optional(s.string()),
    name: s.optional(s.string()),
    reason: s.optional(s.string()),
    relatedEvents: s.optional(s.array(s.lazy(() => recommendationRelatedEventSchema))),
    relatedAnomalies: s.optional(s.array(s.lazy(() => recommendationRelatedAnomalySchema))),
    category: s.optional(s.string()),
    _keysMap: {
      description: "Description",
      link: "Link",
      name: "Name",
      reason: "Reason",
      relatedEvents: "RelatedEvents",
      relatedAnomalies: "RelatedAnomalies",
      category: "Category",
    },
  },
  { additionalProperties: s.json() },
);
