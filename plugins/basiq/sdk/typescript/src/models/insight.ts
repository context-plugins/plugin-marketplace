import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightType1Schema, type InsightType1 } from "./insight-type1.js";
import { links3InternalSchema, links3Schema, type Links3 } from "./links3.js";
import {
  datum1InsightsApiInternalSchema,
  datum1InsightsApiSchema,
  type Datum1InsightsApi,
} from "./unions/datum1-insights-api.js";

export type Insight = {
  /** Resource type indicator @default "insight" */
  type?: "insight";
  /** Unique identifier for the insight */
  id: string;
  /** ISO 8601 timestamp of when the insight was created */
  created: Date;
  /**
   * Array of user IDs associated with this insight. Present only on insights created via POST
   * /insights (multi-user).
   */
  users?: string[];
  /**
   * Type of insight: account verification, balance verification, identity verification, income
   * verification, or expense-ratio
   */
  insightType: InsightType1;
  /** Array of insight data objects, structure varies by insightType */
  data: Datum1InsightsApi[];
  links: Links3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const insightProperties: s.Shape<Insight> = {
  type: s.defaulted(s.literal("insight"), "insight"),
  id: s.string(),
  created: s.dateTime(),
  users: s.optional(s.array(s.string())),
  insightType: insightType1Schema,
  data: s.array(s.lazy(() => datum1InsightsApiInternalSchema)),
  links: links3InternalSchema,
};

export const insightInternalSchema: Schema<Insight> = s.object<Insight>(insightProperties, {
  additionalProperties: s.json(),
});

export const insightSchema: Schema<Insight> = s.lazySchema(() =>
  s.object<Insight>(
    {
      ...insightProperties,
      data: s.array(s.lazy(() => datum1InsightsApiSchema)),
      links: links3Schema,
    },
    { additionalProperties: s.json() },
  ),
);
