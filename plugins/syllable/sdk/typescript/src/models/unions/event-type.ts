import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Event type that triggered the execution, if applicable */
export type EventType = string;

export const eventTypeSchema: Schema<EventType> = s.of<EventType>(s.union([s.string()]));
