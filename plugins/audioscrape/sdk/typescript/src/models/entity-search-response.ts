import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityDetailSchema, type EntityDetail } from "./entity-detail.js";

export type EntitySearchResponse = {
  entities: EntityDetail[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitySearchResponseSchema: Schema<EntitySearchResponse> = s.object<EntitySearchResponse>(
  {
    entities: s.array(s.lazy(() => entityDetailSchema)),
    total: s.int(),
  },
  { additionalProperties: s.json() },
);
