import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links1Schema, type Links1 } from "./links1.js";

/** An error response object. */
export type ErrorResponseError = {
  /**
   * The status code of the error message. This is always the same code as the status code of the
   * HTTP message itself.
   */
  status: number;
  /**
   * The HTTP reason phrase of the error. For example, for a `404` error, the `title` will be `Not
   * Found`.
   */
  title: string;
  /** A detailed human-readable description of the error that occurred. */
  detail: string;
  /**
   * If the error was caused by a value provided by you in a specific field, the `field` property
   * will contain the name of the field that caused the issue.
   */
  field?: string;
  links: Links1;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>({
  status: s.int(),
  title: s.string(),
  detail: s.string(),
  field: s.optional(s.string()),
  links: links1Schema,
  _keysMap: {
    links: "_links",
  },
});
