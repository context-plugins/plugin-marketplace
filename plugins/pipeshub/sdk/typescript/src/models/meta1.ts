import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta1 = {
  /**
   * Request correlation id. Omitted when upstream middleware did not set a request id on the
   * context.
   */
  requestId?: string;
  /** Server timestamp when the response was sent. */
  timestamp: Date;
  /** Total handler duration in milliseconds. */
  duration: number;
};

export const meta1Schema: Schema<Meta1> = s.object<Meta1>({
  requestId: s.optional(s.string()),
  timestamp: s.dateTime(),
  duration: s.int(),
});
