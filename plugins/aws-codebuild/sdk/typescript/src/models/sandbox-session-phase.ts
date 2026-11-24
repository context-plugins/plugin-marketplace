import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phaseContextSchema, type PhaseContext } from "./phase-context.js";
import { phaseStatusSchema, type PhaseStatus } from "./phase-status.js";

export type SandboxSessionPhase = {
  /** The name of the sandbox phase. */
  phaseType?: string;
  /**
   * The current status of the sandbox phase. Valid values include: FAILED The sandbox phase failed.
   * FAULT The sandbox phase faulted. IN_PROGRESS The sandbox phase is still in progress. STOPPED
   * The sandbox phase stopped. SUCCEEDED The sandbox phase succeeded. TIMED_OUT The sandbox phase
   * timed out.
   */
  phaseStatus?: PhaseStatus;
  /** When the sandbox phase started, expressed in Unix time format. */
  startTime?: Date;
  /** When the sandbox phase ended, expressed in Unix time format. */
  endTime?: Date;
  /** How long, in seconds, between the starting and ending times of the sandbox's phase. */
  durationInSeconds?: number;
  /** An array of PhaseContext objects. */
  contexts?: PhaseContext[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sandboxSessionPhaseSchema: Schema<SandboxSessionPhase> = s.object<SandboxSessionPhase>(
  {
    phaseType: s.optional(s.string()),
    phaseStatus: s.optional(s.lazy(() => phaseStatusSchema)),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    durationInSeconds: s.optional(s.int()),
    contexts: s.optional(s.array(s.lazy(() => phaseContextSchema))),
  },
  { additionalProperties: s.json() },
);
