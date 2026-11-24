import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state4Schema, type State4 } from "./state4.js";
import { substate1Schema, type Substate1 } from "./substate1.js";

/**
 * Output only. The job status. Additional application-specific status information might be
 * contained in the type_job and yarn_applications fields.
 */
export type JobStatus1 = {
  /** Output only. Additional state information, which includes status reported by the agent. */
  substate?: Substate1;
  /** Output only. A state message specifying the overall job state. */
  state?: State4;
  /** Output only. The time when this state was entered. */
  stateStartTime?: string;
  /** Optional. Job state details, such as an error description if the state is ERROR. */
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobStatus1Schema: Schema<JobStatus1> = s.object<JobStatus1>(
  {
    substate: s.optional(s.lazy(() => substate1Schema)),
    state: s.optional(s.lazy(() => state4Schema)),
    stateStartTime: s.optional(s.string()),
    details: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
