import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta14 = {
  /** Server-assigned request identifier for tracing. Omitted when not available. */
  requestId?: string;
  /** Server timestamp when the response was produced. */
  timestamp: Date;
  /** Time taken to process the request, in milliseconds. */
  duration: number;
};

export const meta14Schema: Schema<Meta14> = s.object<Meta14>({
  requestId: s.optional(s.string()),
  timestamp: s.dateTime(),
  duration: s.int(),
});
