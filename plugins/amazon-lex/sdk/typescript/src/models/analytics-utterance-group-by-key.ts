import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name19Schema, type Name19 } from "./name19.js";

export type AnalyticsUtteranceGroupByKey = {
  /** The category by which the utterance analytics were grouped. */
  name?: Name19;
  /** A member of the category by which the utterance analytics were grouped. */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsUtteranceGroupByKeySchema: Schema<AnalyticsUtteranceGroupByKey> =
  s.object<AnalyticsUtteranceGroupByKey>(
    {
      name: s.optional(s.lazy(() => name19Schema)),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
