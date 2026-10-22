import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CapturedEvent = {
  /** Raw event data. */
  raw?: string;
  /** Timestamp of the event. */
  time?: number;
};

export const capturedEventSchema: Schema<CapturedEvent> = s.object<CapturedEvent>({
  raw: s.optional(s.string()),
  time: s.optional(s.float64()),
  _keysMap: {
    raw: "_raw",
    time: "_time",
  },
});
