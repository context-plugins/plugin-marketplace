import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { schedule1Schema, type Schedule1 } from "./unions/schedule1.js";

/**
 * The scheduling configuration. It can be triggered based on several ways:
 *
 * Interval: the sync will be triggered based on certain interval(minutes/hours/days/weeks)
 *
 * Cron: the sync will be triggered based on cron expression https://en.wikipedia.org/wiki/Cron.
 *
 * Visual: the sync will be triggered based a visual cron configuration on UI
 *
 * DBT-cloud: the sync will be triggered based on a dbt cloud job
 *
 * Match Booster (type "match_booster"): the sync will be triggered after each Match Booster
 * enrichment run of its model completes. Requires the model to have Match Booster enabled, and
 * takes no inner schedule payload.
 */
export type Schedule = {
  schedule?: Schedule1;
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduleSchema: Schema<Schedule> = s.object<Schedule>(
  {
    schedule: s.optional(s.lazy(() => schedule1Schema)),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
