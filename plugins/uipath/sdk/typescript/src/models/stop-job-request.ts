import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { strategy1Schema, type Strategy1 } from "./strategy1.js";

/** Request payload for stopping a running job */
export type StopJobRequest = {
  /** Unique integer identifier of the job to stop */
  jobId: number;
  /**
   * Stop strategy. SoftStop waits for the current activity to complete before stopping; Kill
   * immediately terminates the robot process.
   */
  strategy: Strategy1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopJobRequestSchema: Schema<StopJobRequest> = s.object<StopJobRequest>(
  {
    jobId: s.int(),
    strategy: strategy1Schema,
  },
  { additionalProperties: s.json() },
);
