import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { terminationReasonSchema, type TerminationReason } from "../termination-reason.js";

/** Reason for termination when FindAll run is in terminal status. */
export type TerminationReason1 = TerminationReason;

export const terminationReason1Schema: Schema<TerminationReason1> = s.of<TerminationReason1>(
  s.union([s.lazy(() => terminationReasonSchema)]),
);
