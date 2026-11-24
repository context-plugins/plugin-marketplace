import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityTypesListItemSchema, type EntityTypesListItem } from "./entity-types-list-item.js";

export type EntityRecognitionConfig = {
  /** Up to 25 entity types that the model is trained to recognize. */
  entityTypes: EntityTypesListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognitionConfigSchema: Schema<EntityRecognitionConfig> =
  s.object<EntityRecognitionConfig>(
    {
      entityTypes: s.array(s.lazy(() => entityTypesListItemSchema)),
      _keysMap: {
        entityTypes: "EntityTypes",
      },
    },
    { additionalProperties: s.json() },
  );
