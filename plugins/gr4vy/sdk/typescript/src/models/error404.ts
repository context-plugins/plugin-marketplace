import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error404 = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `not_found` @default "not_found" */
  code?: string;
  /** Always `404`. @default 404 */
  status?: number;
  /**
   * A human readable message that provides more context to the error.
   *
   * @default "The resource could not be found"
   */
  message?: string;
  /** A list of details that further ellaborate on the error. */
  details?: ErrorDetail[];
};

export const error404Schema: Schema<Error404> = s.object<Error404>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "not_found"),
  status: s.defaulted(s.int(), 404),
  message: s.defaulted(s.string(), "The resource could not be found"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
