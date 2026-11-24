import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EventType = {
  TaskRunStatus: "task_run.status",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
