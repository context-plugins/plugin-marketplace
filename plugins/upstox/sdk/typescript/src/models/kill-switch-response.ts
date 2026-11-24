import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { killSwitchSegmentDataSchema, type KillSwitchSegmentData } from "./kill-switch-segment-data.js";
import { statusSchema, type Status } from "./status.js";

export type KillSwitchResponse = {
  status?: Status;
  data?: KillSwitchSegmentData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const killSwitchResponseSchema: Schema<KillSwitchResponse> = s.object<KillSwitchResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => killSwitchSegmentDataSchema))),
  },
  { additionalProperties: s.json() },
);
