import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta4 = {
  /** Request correlation identifier */
  requestId?: string;
  /** Response generation timestamp */
  timestamp?: Date;
  /** Server processing time in milliseconds */
  duration?: number;
};

export const meta4Schema: Schema<Meta4> = s.object<Meta4>({
  requestId: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
  duration: s.optional(s.int()),
});
