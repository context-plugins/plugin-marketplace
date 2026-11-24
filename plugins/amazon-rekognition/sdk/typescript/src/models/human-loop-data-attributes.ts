import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentClassifierSchema, type ContentClassifier } from "./content-classifier.js";

export type HumanLoopDataAttributes = {
  /** Sets whether the input image is free of personally identifiable information. */
  contentClassifiers?: ContentClassifier[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const humanLoopDataAttributesSchema: Schema<HumanLoopDataAttributes> =
  s.object<HumanLoopDataAttributes>(
    {
      contentClassifiers: s.optional(s.array(s.lazy(() => contentClassifierSchema))),
      _keysMap: {
        contentClassifiers: "ContentClassifiers",
      },
    },
    { additionalProperties: s.json() },
  );
