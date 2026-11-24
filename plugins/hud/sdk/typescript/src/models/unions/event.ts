import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { agentMessageEventSchema, type AgentMessageEvent } from "../agent-message-event.js";
import { fileCaptureEventSchema, type FileCaptureEvent } from "../file-capture-event.js";
import { fileChangeEventSchema, type FileChangeEvent } from "../file-change-event.js";
import { fileSetupEventSchema, type FileSetupEvent } from "../file-setup-event.js";
import { fileSnapshotEventSchema, type FileSnapshotEvent } from "../file-snapshot-event.js";
import { inferenceEventSchema, type InferenceEvent } from "../inference-event.js";
import { observationEventSchema, type ObservationEvent } from "../observation-event.js";
import { rawEventSchema, type RawEvent } from "../raw-event.js";
import { scenarioEventSchema, type ScenarioEvent } from "../scenario-event.js";
import { subagentEventSchema, type SubagentEvent } from "../subagent-event.js";
import { toolCallEventSchema, type ToolCallEvent } from "../tool-call-event.js";
import { userMessageEventSchema, type UserMessageEvent } from "../user-message-event.js";
import { videoSegmentEventSchema, type VideoSegmentEvent } from "../video-segment-event.js";

export type Event =
  | (AgentMessageEvent & { kind: "agent_message" })
  | (FileCaptureEvent & { kind: "file_capture" })
  | (FileChangeEvent & { kind: "file_change" })
  | (FileSetupEvent & { kind: "file_setup" })
  | (FileSnapshotEvent & { kind: "file_snapshot" })
  | (RawEvent & { kind: "raw" })
  | (InferenceEvent & { kind: "robot_inference" })
  | (ObservationEvent & { kind: "robot_observation" })
  | (VideoSegmentEvent & { kind: "robot_video_segment" })
  | (ScenarioEvent & { kind: "scenario_evaluate" })
  | (ScenarioEvent & { kind: "scenario_setup" })
  | (SubagentEvent & { kind: "subagent" })
  | (ToolCallEvent & { kind: "tool_call" })
  | (UserMessageEvent & { kind: "user_message" });

export const eventSchema: Schema<Event> = s.discriminatedUnion<Event>("kind", {
  agent_message: agentMessageEventSchema,
  file_capture: fileCaptureEventSchema,
  file_change: fileChangeEventSchema,
  file_setup: fileSetupEventSchema,
  file_snapshot: fileSnapshotEventSchema,
  raw: rawEventSchema,
  robot_inference: inferenceEventSchema,
  robot_observation: observationEventSchema,
  robot_video_segment: videoSegmentEventSchema,
  scenario_evaluate: scenarioEventSchema,
  scenario_setup: scenarioEventSchema,
  subagent: subagentEventSchema,
  tool_call: toolCallEventSchema,
  user_message: userMessageEventSchema,
});
