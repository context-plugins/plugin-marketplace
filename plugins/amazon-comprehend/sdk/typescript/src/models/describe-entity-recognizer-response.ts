import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRecognizerPropertiesSchema,
  type EntityRecognizerProperties,
} from "./entity-recognizer-properties.js";

export type DescribeEntityRecognizerResponse = {
  entityRecognizerProperties?: EntityRecognizerProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeEntityRecognizerResponseSchema: Schema<DescribeEntityRecognizerResponse> =
  s.object<DescribeEntityRecognizerResponse>(
    {
      entityRecognizerProperties: s.optional(s.lazy(() => entityRecognizerPropertiesSchema)),
      _keysMap: {
        entityRecognizerProperties: "EntityRecognizerProperties",
      },
    },
    { additionalProperties: s.json() },
  );
