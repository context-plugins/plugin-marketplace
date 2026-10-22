import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Event1 = {
  RunStarted: "RUN_STARTED",
  RunFinished: "RUN_FINISHED",
  RunError: "RUN_ERROR",
  StepStarted: "STEP_STARTED",
  StepFinished: "STEP_FINISHED",
  TextMessageStart: "TEXT_MESSAGE_START",
  TextMessageContent: "TEXT_MESSAGE_CONTENT",
  TextMessageEnd: "TEXT_MESSAGE_END",
  ReasoningStart: "REASONING_START",
  ReasoningMessageStart: "REASONING_MESSAGE_START",
  ReasoningMessageContent: "REASONING_MESSAGE_CONTENT",
  ReasoningMessageEnd: "REASONING_MESSAGE_END",
  ReasoningEnd: "REASONING_END",
  ToolCallStart: "TOOL_CALL_START",
  ToolCallArgs: "TOOL_CALL_ARGS",
  ToolCallEnd: "TOOL_CALL_END",
  ToolCallResult: "TOOL_CALL_RESULT",
  StateDelta: "STATE_DELTA",
  StateSnapshot: "STATE_SNAPSHOT",
  Custom: "CUSTOM",
  Heartbeat: "HEARTBEAT",
} as const;
export type Event1 = (typeof Event1)[keyof typeof Event1] | (string & {});

export const event1Schema: EnumSchema<Event1> = s.enumOf<Event1>(Event1);
