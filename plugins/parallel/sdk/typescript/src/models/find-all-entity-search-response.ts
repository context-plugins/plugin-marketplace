import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityItemSchema, type EntityItem } from "./entity-item.js";

export type FindAllEntitySearchResponse = {
  /** Entity set request ID. Example: `entity_set_cad0a6d2dec046bd95ae900527d880e7` */
  entitySetId: string;
  /** Ranked list of entities. */
  entities: EntityItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllEntitySearchResponseSchema: Schema<FindAllEntitySearchResponse> =
  s.object<FindAllEntitySearchResponse>(
    {
      entitySetId: s.string(),
      entities: s.array(s.lazy(() => entityItemSchema)),
      _keysMap: {
        entitySetId: "entity_set_id",
      },
    },
    { additionalProperties: s.json() },
  );
