import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recommendationRelatedEventResourceSchema,
  type RecommendationRelatedEventResource,
} from "./recommendation-related-event-resource.js";

export type RecommendationRelatedEvent = {
  /** The name of the event. This corresponds to the Name field in an Event object. */
  name?: string;
  /**
   * A ResourceCollection object that contains arrays of the names of Amazon Web Services
   * CloudFormation stacks. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   */
  resources?: RecommendationRelatedEventResource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationRelatedEventSchema: Schema<RecommendationRelatedEvent> =
  s.object<RecommendationRelatedEvent>(
    {
      name: s.optional(s.string()),
      resources: s.optional(s.array(s.lazy(() => recommendationRelatedEventResourceSchema))),
      _keysMap: {
        name: "Name",
        resources: "Resources",
      },
    },
    { additionalProperties: s.json() },
  );
