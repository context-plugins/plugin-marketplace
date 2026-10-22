import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { callbackEventSchema, type CallbackEvent } from "../callback-event.js";

/** The events that trigger a callback. */
export type CallbackEvents = CallbackEvent[];

export const callbackEventsSchema: Schema<CallbackEvents> = s.of<CallbackEvents>(
  s.union([s.array(s.lazy(() => callbackEventSchema))]),
);
