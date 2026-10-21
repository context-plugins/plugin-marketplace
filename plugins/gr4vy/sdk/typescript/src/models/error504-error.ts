import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error504Error = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `gateway_timeout` @default "gateway_timeout" */
  code?: string;
  /** @default 504 */
  status?: number;
  /**
   * A human readable message that provides more context to the error.
   *
   * @default "Request could not be processed"
   */
  message?: string;
  /** A list of details that further ellaborate on the error. */
  details?: ErrorDetail[];
};

export const error504ErrorSchema: Schema<Error504Error> = s.object<Error504Error>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "gateway_timeout"),
  status: s.defaulted(s.int(), 504),
  message: s.defaulted(s.string(), "Request could not be processed"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
