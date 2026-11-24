import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status9Schema, type Status9 } from "./status9.js";

export type EntityRecognizerFilter = {
  /** The status of an entity recognizer. */
  status?: Status9;
  /** The name that you assigned the entity recognizer. */
  recognizerName?: string;
  /**
   * Filters the list of entities based on the time that the list was submitted for processing.
   * Returns only jobs submitted before the specified time. Jobs are returned in descending order,
   * newest to oldest.
   */
  submitTimeBefore?: Date;
  /**
   * Filters the list of entities based on the time that the list was submitted for processing.
   * Returns only jobs submitted after the specified time. Jobs are returned in ascending order,
   * oldest to newest.
   */
  submitTimeAfter?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRecognizerFilterSchema: Schema<EntityRecognizerFilter> = s.object<EntityRecognizerFilter>(
  {
    status: s.optional(s.lazy(() => status9Schema)),
    recognizerName: s.optional(s.string()),
    submitTimeBefore: s.optional(s.dateTime()),
    submitTimeAfter: s.optional(s.dateTime()),
    _keysMap: {
      status: "Status",
      recognizerName: "RecognizerName",
      submitTimeBefore: "SubmitTimeBefore",
      submitTimeAfter: "SubmitTimeAfter",
    },
  },
  { additionalProperties: s.json() },
);
