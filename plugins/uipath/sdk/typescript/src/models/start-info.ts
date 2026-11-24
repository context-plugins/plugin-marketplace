import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobPrioritySchema, type JobPriority } from "./job-priority.js";
import { source1Schema, type Source1 } from "./source1.js";
import { strategySchema, type Strategy } from "./strategy.js";

/** Parameters controlling how jobs are started */
export type StartInfo = {
  /** GUID key of the process (release) to start */
  releaseKey: string;
  /** Strategy for allocating robots to the job */
  strategy: Strategy;
  /** List of robot IDs to use when Strategy is RobotIds or Specific */
  robotIds?: number[];
  /** Number of robots to use when Strategy is JobsCount */
  noOfRobots?: number;
  /** Source attribution for the started jobs */
  source?: Source1;
  /** JSON-serialized input arguments to pass to the process */
  inputArguments?: string;
  /** Priority level for the job queue */
  jobPriority?: JobPriority;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startInfoSchema: Schema<StartInfo> = s.object<StartInfo>(
  {
    releaseKey: s.string(),
    strategy: strategySchema,
    robotIds: s.optional(s.array(s.int())),
    noOfRobots: s.optional(s.int()),
    source: s.optional(s.lazy(() => source1Schema)),
    inputArguments: s.optional(s.string()),
    jobPriority: s.optional(s.lazy(() => jobPrioritySchema)),
    _keysMap: {
      releaseKey: "ReleaseKey",
      strategy: "Strategy",
      robotIds: "RobotIds",
      noOfRobots: "NoOfRobots",
      source: "Source",
      inputArguments: "InputArguments",
      jobPriority: "JobPriority",
    },
  },
  { additionalProperties: s.json() },
);
