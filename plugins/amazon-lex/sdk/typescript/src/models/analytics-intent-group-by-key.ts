import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name3Schema, type Name3 } from "./name3.js";

export type AnalyticsIntentGroupByKey = {
  /** A category by which the intent analytics were grouped. */
  name?: Name3;
  /** A member of the category by which the intent analytics were grouped. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentGroupByKeySchema: Schema<AnalyticsIntentGroupByKey> =
  s.object<AnalyticsIntentGroupByKey>(
    {
      name: s.optional(s.lazy(() => name3Schema)),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
