import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta5 = {
  requestId?: string;
  timestamp: Date;
  /** Server-side processing time in milliseconds */
  duration: number;
};

export const meta5Schema: Schema<Meta5> = s.object<Meta5>({
  requestId: s.optional(s.string()),
  timestamp: s.dateTime(),
  duration: s.int(),
});
