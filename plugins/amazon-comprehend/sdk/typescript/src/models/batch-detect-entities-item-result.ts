import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entitySchema, type Entity } from "./entity.js";

export type BatchDetectEntitiesItemResult = {
  /** The zero-based index of the document in the input list. */
  index?: number;
  /** One or more Entity objects, one for each entity detected in the document. */
  entities?: Entity[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectEntitiesItemResultSchema: Schema<BatchDetectEntitiesItemResult> =
  s.object<BatchDetectEntitiesItemResult>(
    {
      index: s.optional(s.int()),
      entities: s.optional(s.array(s.lazy(() => entitySchema))),
      _keysMap: {
        index: "Index",
        entities: "Entities",
      },
    },
    { additionalProperties: s.json() },
  );
