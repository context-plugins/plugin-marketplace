import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityLabelSchema, type EntityLabel } from "./entity-label.js";

export type ContainsPiiEntitiesResponse = {
  /**
   * The labels used in the document being analyzed. Individual labels represent personally
   * identifiable information (PII) entity types.
   */
  labels?: EntityLabel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const containsPiiEntitiesResponseSchema: Schema<ContainsPiiEntitiesResponse> =
  s.object<ContainsPiiEntitiesResponse>(
    {
      labels: s.optional(s.array(s.lazy(() => entityLabelSchema))),
      _keysMap: {
        labels: "Labels",
      },
    },
    { additionalProperties: s.json() },
  );
