import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  findAllCandidateMetrics1Schema,
  type FindAllCandidateMetrics1,
} from "./find-all-candidate-metrics1.js";
import { statusSchema, type Status } from "./status.js";
import { terminationReason1Schema, type TerminationReason1 } from "./unions/termination-reason1.js";

/** Status object for FindAll run. */
export type FindAllRunStatus = {
  /** Status of the FindAll run. */
  status: Status;
  /** Whether the FindAll run is active */
  isActive: boolean;
  /** Candidate metrics for the FindAll run. */
  metrics: FindAllCandidateMetrics1;
  /** Reason for termination when FindAll run is in terminal status. */
  terminationReason?: TerminationReason1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllRunStatusSchema: Schema<FindAllRunStatus> = s.object<FindAllRunStatus>(
  {
    status: statusSchema,
    isActive: s.boolean(),
    metrics: findAllCandidateMetrics1Schema,
    terminationReason: s.optional(s.lazy(() => terminationReason1Schema)),
    _keysMap: {
      isActive: "is_active",
      terminationReason: "termination_reason",
    },
  },
  { additionalProperties: s.json() },
);
