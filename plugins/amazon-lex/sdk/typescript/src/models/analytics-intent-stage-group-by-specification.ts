import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name9Schema, type Name9 } from "./name9.js";

export type AnalyticsIntentStageGroupBySpecification = {
  /**
   * Specifies whether to group the intent stages by their name or the intent to which the session
   * was switched.
   */
  name: Name9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentStageGroupBySpecificationSchema: Schema<AnalyticsIntentStageGroupBySpecification> =
  s.object<AnalyticsIntentStageGroupBySpecification>(
    {
      name: name9Schema,
    },
    { additionalProperties: s.json() },
  );
