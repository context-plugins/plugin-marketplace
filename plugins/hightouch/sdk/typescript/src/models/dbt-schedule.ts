import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { jobSchema, type Job } from "./job.js";

export type DbtSchedule = {
  account: Account;
  job: Job;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dbtScheduleSchema: Schema<DbtSchedule> = s.object<DbtSchedule>(
  {
    account: accountSchema,
    job: jobSchema,
  },
  { additionalProperties: s.json() },
);
