import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name8Schema, type Name8 } from "./name8.js";

export type AnalyticsIntentStageGroupByKey = {
  /** A category by which the intent stage analytics were grouped. */
  name?: Name8;
  /** A member of the category by which the intent stage analytics were grouped. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentStageGroupByKeySchema: Schema<AnalyticsIntentStageGroupByKey> =
  s.object<AnalyticsIntentStageGroupByKey>(
    {
      name: s.optional(s.lazy(() => name8Schema)),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
