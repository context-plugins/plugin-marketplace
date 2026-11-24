import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Priority information for this resource result. */
export type Priority = {
  /** The priority level (e.g. Low, Medium, High). */
  value?: string;
  /** Numeric priority score. */
  priorityScore?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const prioritySchema: Schema<Priority> = s.object<Priority>(
  {
    value: s.optional(s.string()),
    priorityScore: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
