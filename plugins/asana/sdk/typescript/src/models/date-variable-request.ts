import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DateVariableRequest = {
  /**
   * Globally unique identifier of the date field in the project template. A value of `1` refers to
   * the project start date, while `2` refers to the project due date.
   */
  gid?: string;
  /**
   * The date with which the date variable should be replaced when instantiating a project. This
   * takes a date with `YYYY-MM-DD` format.
   */
  value?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateVariableRequestSchema: Schema<DateVariableRequest> = s.object<DateVariableRequest>(
  {
    gid: s.optional(s.string()),
    value: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
