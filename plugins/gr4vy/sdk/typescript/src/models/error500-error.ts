import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error500Error = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `server_error` @default "server_error" */
  code?: string;
  /** Always `500`. @default 500 */
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

export const error500ErrorSchema: Schema<Error500Error> = s.object<Error500Error>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "server_error"),
  status: s.defaulted(s.int(), 500),
  message: s.defaulted(s.string(), "Request could not be processed"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
