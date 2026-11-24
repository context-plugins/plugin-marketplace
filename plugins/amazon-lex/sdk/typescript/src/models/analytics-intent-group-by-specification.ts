import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name4Schema, type Name4 } from "./name4.js";

export type AnalyticsIntentGroupBySpecification = {
  /** Specifies whether to group the intent stages by their name or their end state. */
  name: Name4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentGroupBySpecificationSchema: Schema<AnalyticsIntentGroupBySpecification> =
  s.object<AnalyticsIntentGroupBySpecification>(
    {
      name: name4Schema,
    },
    { additionalProperties: s.json() },
  );
