import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type EntityLabel = {
  /** The name of the label. */
  name?: Name;
  /** The level of confidence that Amazon Comprehend has in the accuracy of the detection. */
  score?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityLabelSchema: Schema<EntityLabel> = s.object<EntityLabel>(
  {
    name: s.optional(s.lazy(() => nameSchema)),
    score: s.optional(s.float64()),
    _keysMap: {
      name: "Name",
      score: "Score",
    },
  },
  { additionalProperties: s.json() },
);
