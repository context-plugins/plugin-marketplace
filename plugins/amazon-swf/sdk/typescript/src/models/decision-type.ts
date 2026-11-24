import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the type of the decision. */
export const DecisionType = {
  ScheduleActivityTask: "ScheduleActivityTask",
  RequestCancelActivityTask: "RequestCancelActivityTask",
  CompleteWorkflowExecution: "CompleteWorkflowExecution",
  FailWorkflowExecution: "FailWorkflowExecution",
  CancelWorkflowExecution: "CancelWorkflowExecution",
  ContinueAsNewWorkflowExecution: "ContinueAsNewWorkflowExecution",
  RecordMarker: "RecordMarker",
  StartTimer: "StartTimer",
  CancelTimer: "CancelTimer",
  SignalExternalWorkflowExecution: "SignalExternalWorkflowExecution",
  RequestCancelExternalWorkflowExecution: "RequestCancelExternalWorkflowExecution",
  StartChildWorkflowExecution: "StartChildWorkflowExecution",
  ScheduleLambdaFunction: "ScheduleLambdaFunction",
} as const;
export type DecisionType = (typeof DecisionType)[keyof typeof DecisionType] | (string & {});

export const decisionTypeSchema: EnumSchema<DecisionType> = s.enumOf<DecisionType>(DecisionType);
