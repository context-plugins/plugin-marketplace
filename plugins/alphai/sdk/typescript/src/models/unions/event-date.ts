import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EventDate = string;

export const eventDateSchema: Schema<EventDate> = s.of<EventDate>(s.union([s.dateOnly()]));
