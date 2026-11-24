import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Current state of the execution. */
export const State3 = {
  ExecutionStateUnknown: "EXECUTION_STATE_UNKNOWN",
  ExecutionStateStarted: "EXECUTION_STATE_STARTED",
  ExecutionStateCompiled: "EXECUTION_STATE_COMPILED",
  ExecutionStateReady: "EXECUTION_STATE_READY",
  ExecutionStateCanceled: "EXECUTION_STATE_CANCELED",
  ExecutionStateFailed: "EXECUTION_STATE_FAILED",
  ExecutionStateFinished: "EXECUTION_STATE_FINISHED",
  ExecutionStateClosed: "EXECUTION_STATE_CLOSED",
} as const;
export type State3 = (typeof State3)[keyof typeof State3] | (string & {});

export const state3Schema: EnumSchema<State3> = s.enumOf<State3>(State3);
