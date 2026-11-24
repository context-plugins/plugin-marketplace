import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { piiEntitySchema, type PiiEntity } from "./pii-entity.js";

export type DetectPiiEntitiesResponse = {
  /**
   * A collection of PII entities identified in the input text. For each entity, the response
   * provides the entity type, where the entity text begins and ends, and the level of confidence
   * that Amazon Comprehend has in the detection.
   */
  entities?: PiiEntity[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectPiiEntitiesResponseSchema: Schema<DetectPiiEntitiesResponse> =
  s.object<DetectPiiEntitiesResponse>(
    {
      entities: s.optional(s.array(s.lazy(() => piiEntitySchema))),
      _keysMap: {
        entities: "Entities",
      },
    },
    { additionalProperties: s.json() },
  );
