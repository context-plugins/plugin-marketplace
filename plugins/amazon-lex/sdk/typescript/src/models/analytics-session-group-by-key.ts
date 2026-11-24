import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name14Schema, type Name14 } from "./name14.js";

export type AnalyticsSessionGroupByKey = {
  /** The category by which the session analytics were grouped. */
  name?: Name14;
  /** A member of the category by which the session analytics were grouped. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsSessionGroupByKeySchema: Schema<AnalyticsSessionGroupByKey> =
  s.object<AnalyticsSessionGroupByKey>(
    {
      name: s.optional(s.lazy(() => name14Schema)),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
