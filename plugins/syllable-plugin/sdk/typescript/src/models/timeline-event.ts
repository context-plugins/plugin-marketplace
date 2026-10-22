import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timelineEventKind2Schema, type TimelineEventKind2 } from "./timeline-event-kind2.js";
import { category1Schema, type Category1 } from "./unions/category1.js";
import { durationMs1Schema, type DurationMs1 } from "./unions/duration-ms1.js";
import { label11Schema, type Label11 } from "./unions/label11.js";
import { lang1Schema, type Lang1 } from "./unions/lang1.js";
import { metadata7Schema, type Metadata7 } from "./unions/metadata7.js";
import { source5Schema, type Source5 } from "./unions/source5.js";
import { text3Schema, type Text3 } from "./unions/text3.js";
import { toolError1Schema, type ToolError1 } from "./unions/tool-error1.js";
import { toolRequest1Schema, type ToolRequest1 } from "./unions/tool-request1.js";
import { toolResult2Schema, type ToolResult2 } from "./unions/tool-result2.js";
import { turnIndexSchema, type TurnIndex } from "./unions/turn-index.js";

/** A single normalized event on the consolidated session timeline. */
export type TimelineEvent = {
  /** Which stream this event came from */
  kind: TimelineEventKind2;
  /** Absolute time of the event (for ordering) */
  timestamp: Date;
  /** Time since session start, formatted MM:SS (or HH:MM:SS) */
  offset: string;
  /**
   * 0-based index of the transcript turn. Transcript events carry their own turn index;
   * tool/latency events carry the index of the nearest preceding turn they bind to. None only for
   * non-transcript events that precede the first transcript turn.
   */
  turnIndex?: TurnIndex;
  /** "user" or "agent" (transcript events) */
  source?: Source5;
  /** Message content (transcript events) */
  text?: Text3;
  /** Language code (transcript events) */
  lang?: Lang1;
  /**
   * tool | llm | tts | stt | http. A tool call surfaces once, as a `kind=tool` event; its redundant
   * tool-latency measurement is dropped from the timeline.
   */
  category?: Category1;
  /** Tool name (tool events) or the latency measurement name (e.g. stt_processing) */
  label?: Label11;
  /** Provider/model parts of a latency label */
  metadata?: Metadata7;
  /** Duration of the event in milliseconds */
  durationMs?: DurationMs1;
  /** Tool request payload, JSON-encoded */
  toolRequest?: ToolRequest1;
  /** Tool response payload, JSON-encoded */
  toolResult?: ToolResult2;
  /** Tool error payload, JSON-encoded */
  toolError?: ToolError1;
};

export const timelineEventSchema: Schema<TimelineEvent> = s.object<TimelineEvent>({
  kind: timelineEventKind2Schema,
  timestamp: s.dateTime(),
  offset: s.string(),
  turnIndex: s.optional(s.lazy(() => turnIndexSchema)),
  source: s.optional(s.lazy(() => source5Schema)),
  text: s.optional(s.lazy(() => text3Schema)),
  lang: s.optional(s.lazy(() => lang1Schema)),
  category: s.optional(s.lazy(() => category1Schema)),
  label: s.optional(s.lazy(() => label11Schema)),
  metadata: s.optional(s.lazy(() => metadata7Schema)),
  durationMs: s.optional(s.lazy(() => durationMs1Schema)),
  toolRequest: s.optional(s.lazy(() => toolRequest1Schema)),
  toolResult: s.optional(s.lazy(() => toolResult2Schema)),
  toolError: s.optional(s.lazy(() => toolError1Schema)),
  _keysMap: {
    turnIndex: "turn_index",
    durationMs: "duration_ms",
    toolRequest: "tool_request",
    toolResult: "tool_result",
    toolError: "tool_error",
  },
});
