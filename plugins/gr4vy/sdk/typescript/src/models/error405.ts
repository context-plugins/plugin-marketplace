import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error405 = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `method_not_allowed` @default "method_not_allowed" */
  code?: string;
  /** Always `405`. @default 405 */
  status?: number;
  /**
   * A human readable message that provides more context to the error.
   *
   * @default "Method Not Allowed"
   */
  message?: string;
  /** A list of details that further ellaborate on the error. */
  details?: ErrorDetail[];
};

export const error405Schema: Schema<Error405> = s.object<Error405>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "method_not_allowed"),
  status: s.defaulted(s.int(), 405),
  message: s.defaulted(s.string(), "Method Not Allowed"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
