import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status7Schema, type Status7 } from "./status7.js";

export type DocumentClassifierFilter = {
  /** Filters the list of classifiers based on status. */
  status?: Status7;
  /** The name that you assigned to the document classifier */
  documentClassifierName?: string;
  /**
   * Filters the list of classifiers based on the time that the classifier was submitted for
   * processing. Returns only classifiers submitted before the specified time. Classifiers are
   * returned in ascending order, oldest to newest.
   */
  submitTimeBefore?: Date;
  /**
   * Filters the list of classifiers based on the time that the classifier was submitted for
   * processing. Returns only classifiers submitted after the specified time. Classifiers are
   * returned in descending order, newest to oldest.
   */
  submitTimeAfter?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentClassifierFilterSchema: Schema<DocumentClassifierFilter> =
  s.object<DocumentClassifierFilter>(
    {
      status: s.optional(s.lazy(() => status7Schema)),
      documentClassifierName: s.optional(s.string()),
      submitTimeBefore: s.optional(s.dateTime()),
      submitTimeAfter: s.optional(s.dateTime()),
      _keysMap: {
        status: "Status",
        documentClassifierName: "DocumentClassifierName",
        submitTimeBefore: "SubmitTimeBefore",
        submitTimeAfter: "SubmitTimeAfter",
      },
    },
    { additionalProperties: s.json() },
  );
