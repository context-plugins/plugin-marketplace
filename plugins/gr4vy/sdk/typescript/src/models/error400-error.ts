import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error400Error = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `bad_request` @default "bad_request" */
  code?: string;
  /** Always `400`. @default 400 */
  status?: number;
  /** A human readable message that provides more context to the error. @default "Generic error" */
  message?: string;
  /** A list of details that further ellaborate on the error. */
  details?: ErrorDetail[];
};

export const error400ErrorSchema: Schema<Error400Error> = s.object<Error400Error>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "bad_request"),
  status: s.defaulted(s.int(), 400),
  message: s.defaulted(s.string(), "Generic error"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
