import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta10 = {
  /** Server-assigned identifier for the request */
  requestId?: string;
  /** Server time the response was produced */
  timestamp?: Date;
  /** Server processing time in milliseconds */
  duration?: number;
};

export const meta10Schema: Schema<Meta10> = s.object<Meta10>({
  requestId: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
  duration: s.optional(s.int()),
});
