import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta2 = {
  /**
   * Request correlation id. Omitted when upstream middleware did not set `req.context.requestId`.
   */
  requestId?: string;
  /** Server timestamp when the response was sent. */
  timestamp: Date;
  /** Total handler duration in milliseconds. */
  duration: number;
  /** Same value as the top-level `recordsUsed`. Duplicated inside `meta` for client convenience. */
  recordsUsed?: number;
};

export const meta2Schema: Schema<Meta2> = s.object<Meta2>({
  requestId: s.optional(s.string()),
  timestamp: s.dateTime(),
  duration: s.int(),
  recordsUsed: s.optional(s.int()),
});
