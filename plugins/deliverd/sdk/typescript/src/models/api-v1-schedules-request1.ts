import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SchedulesRequest1 = {
  recurrence?: string;
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SchedulesRequest1Schema: Schema<ApiV1SchedulesRequest1> = s.object<ApiV1SchedulesRequest1>(
  {
    recurrence: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
