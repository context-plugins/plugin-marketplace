import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { goalSchema, type Goal } from "./goal.js";

export type SitesGoalsResponse = {
  goals: Goal[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sitesGoalsResponseSchema: Schema<SitesGoalsResponse> = s.object<SitesGoalsResponse>(
  {
    goals: s.array(s.lazy(() => goalSchema)),
  },
  { additionalProperties: s.json() },
);
