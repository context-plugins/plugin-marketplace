import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Priority ordering of experiences for conflict resolution. */
export type ExperiencePriority = {
  /** Ordered list of experience UIDs from highest to lowest priority. */
  priority?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const experiencePrioritySchema: Schema<ExperiencePriority> = s.object<ExperiencePriority>(
  {
    priority: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
