import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRecognizerPropertiesSchema,
  type EntityRecognizerProperties,
} from "./entity-recognizer-properties.js";

export type ListEntityRecognizersResponse = {
  /** The list of properties of an entity recognizer. */
  entityRecognizerPropertiesList?: EntityRecognizerProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEntityRecognizersResponseSchema: Schema<ListEntityRecognizersResponse> =
  s.object<ListEntityRecognizersResponse>(
    {
      entityRecognizerPropertiesList: s.optional(s.array(s.lazy(() => entityRecognizerPropertiesSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        entityRecognizerPropertiesList: "EntityRecognizerPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
