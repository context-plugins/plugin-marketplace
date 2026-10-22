import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FunctionConfSchemaWindow = {
  /** Identifies the unique ID, used for a event window */
  eventWindowId?: number;
  /** All window functions, tracked by this event window */
  registeredFunctions?: string[];
  /** Number of events to keep before the current event in the window */
  tailEventCount?: number;
  /** Number of events to keep after the current event in the window */
  headEventCount?: number;
};

export const functionConfSchemaWindowSchema: Schema<FunctionConfSchemaWindow> =
  s.object<FunctionConfSchemaWindow>({
    eventWindowId: s.optional(s.float64()),
    registeredFunctions: s.optional(s.array(s.string())),
    tailEventCount: s.optional(s.float64()),
    headEventCount: s.optional(s.float64()),
  });
