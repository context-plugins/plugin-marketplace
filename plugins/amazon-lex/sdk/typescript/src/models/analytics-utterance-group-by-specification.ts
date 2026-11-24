import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name20Schema, type Name20 } from "./name20.js";

export type AnalyticsUtteranceGroupBySpecification = {
  /** Specifies whether to group the utterances by their text or their state. */
  name: Name20;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsUtteranceGroupBySpecificationSchema: Schema<AnalyticsUtteranceGroupBySpecification> =
  s.object<AnalyticsUtteranceGroupBySpecification>(
    {
      name: name20Schema,
    },
    { additionalProperties: s.json() },
  );
