import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EventType4 = {
  MonitorEventDetected: "monitor.event.detected",
  MonitorExecutionCompleted: "monitor.execution.completed",
  MonitorExecutionFailed: "monitor.execution.failed",
} as const;
export type EventType4 = (typeof EventType4)[keyof typeof EventType4] | (string & {});

export const eventType4Schema: EnumSchema<EventType4> = s.enumOf<EventType4>(EventType4);
