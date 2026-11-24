import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DateVariableCompact = {
  /**
   * Globally unique identifier of the date field in the project template. A value of `1` refers to
   * the project start date, while `2` refers to the project due date.
   */
  gid?: string;
  /** The name of the date variable. */
  name?: string;
  /** The description of what the date variable is used for when instantiating a project. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateVariableCompactSchema: Schema<DateVariableCompact> = s.object<DateVariableCompact>(
  {
    gid: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
