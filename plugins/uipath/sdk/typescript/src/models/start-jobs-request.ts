import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { startInfoSchema, type StartInfo } from "./start-info.js";

/** Request payload for starting one or more automation jobs */
export type StartJobsRequest = {
  /** Parameters controlling how jobs are started */
  startInfo: StartInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startJobsRequestSchema: Schema<StartJobsRequest> = s.object<StartJobsRequest>(
  {
    startInfo: startInfoSchema,
  },
  { additionalProperties: s.json() },
);
