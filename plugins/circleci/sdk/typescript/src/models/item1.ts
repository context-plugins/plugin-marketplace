import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Item1 = {
  /** The workflow run ID */
  id?: string;
  /** The status of the run */
  status?: string;
  /** Duration in seconds */
  duration?: number;
  /** When the run was created */
  createdAt?: Date;
  /** When the run stopped */
  stoppedAt?: Date;
  /** Credits consumed by this run */
  creditsUsed?: number;
  /** The branch that was built */
  branch?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item1Schema: Schema<Item1> = s.object<Item1>(
  {
    id: s.optional(s.string()),
    status: s.optional(s.string()),
    duration: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    stoppedAt: s.optional(s.dateTime()),
    creditsUsed: s.optional(s.int()),
    branch: s.optional(s.string()),
    _keysMap: {
      createdAt: "created_at",
      stoppedAt: "stopped_at",
      creditsUsed: "credits_used",
    },
  },
  { additionalProperties: s.json() },
);
