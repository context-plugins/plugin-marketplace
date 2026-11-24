import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name15Schema, type Name15 } from "./name15.js";

export type AnalyticsSessionGroupBySpecification = {
  /** Specifies whether to group the session by their end state or their locale. */
  name: Name15;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsSessionGroupBySpecificationSchema: Schema<AnalyticsSessionGroupBySpecification> =
  s.object<AnalyticsSessionGroupBySpecification>(
    {
      name: name15Schema,
    },
    { additionalProperties: s.json() },
  );
