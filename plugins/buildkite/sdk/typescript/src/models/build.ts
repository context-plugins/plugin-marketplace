import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobInternalSchema, jobSchema, type Job } from "./job.js";
import { stateSchema, type State } from "./state.js";
import { userInternalSchema, userSchema, type User } from "./user.js";

export type Build = {
  id?: string;
  number?: number;
  state?: State;
  branch?: string;
  commit?: string;
  message?: string;
  url?: string;
  webUrl?: string;
  createdAt?: Date;
  scheduledAt?: Date;
  startedAt?: Date | null;
  finishedAt?: Date | null;
  creator?: User;
  jobs?: Job[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const buildProperties: s.Shape<Build> = {
  id: s.optional(s.string()),
  number: s.optional(s.int()),
  state: s.optional(s.lazy(() => stateSchema)),
  branch: s.optional(s.string()),
  commit: s.optional(s.string()),
  message: s.optional(s.string()),
  url: s.optional(s.string()),
  webUrl: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  scheduledAt: s.optional(s.dateTime()),
  startedAt: s.optionalNullable(s.dateTime()),
  finishedAt: s.optionalNullable(s.dateTime()),
  creator: s.optional(s.lazy(() => userInternalSchema)),
  jobs: s.optional(s.array(s.lazy(() => jobInternalSchema))),
  _keysMap: {
    webUrl: "web_url",
    createdAt: "created_at",
    scheduledAt: "scheduled_at",
    startedAt: "started_at",
    finishedAt: "finished_at",
  },
};

export const buildInternalSchema: Schema<Build> = s.object<Build>(buildProperties, {
  additionalProperties: s.json(),
});

export const buildSchema: Schema<Build> = s.lazySchema(() =>
  s.object<Build>(
    {
      ...buildProperties,
      url: s.optional(s.string().check(s.url())),
      webUrl: s.optional(s.string().check(s.url())),
      creator: s.optional(s.lazy(() => userSchema)),
      jobs: s.optional(s.array(s.lazy(() => jobSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
