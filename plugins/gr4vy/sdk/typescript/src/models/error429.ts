import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error429 = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `too_many_requests` @default "too_many_requests" */
  code?: string;
  /** Always `429`. @default 429 */
  status?: number;
  /** A human readable message that provides more context to the error. @default "Generic error" */
  message?: string;
  /** A list of details that further ellaborate on the error. */
  details?: ErrorDetail[];
};

export const error429Schema: Schema<Error429> = s.object<Error429>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "too_many_requests"),
  status: s.defaulted(s.int(), 429),
  message: s.defaulted(s.string(), "Generic error"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
