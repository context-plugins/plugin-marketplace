import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecommendationRelatedEventResource = {
  /**
   * The name of the resource that emitted the event. This corresponds to the Name field in an
   * EventResource object.
   */
  name?: string;
  /**
   * The type of the resource that emitted the event. This corresponds to the Type field in an
   * EventResource object.
   */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationRelatedEventResourceSchema: Schema<RecommendationRelatedEventResource> =
  s.object<RecommendationRelatedEventResource>(
    {
      name: s.optional(s.string()),
      type: s.optional(s.string()),
      _keysMap: {
        name: "Name",
        type: "Type",
      },
    },
    { additionalProperties: s.json() },
  );
