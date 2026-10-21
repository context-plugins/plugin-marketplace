import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error425Error = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `too_early` @default "too_early" */
  code?: string;
  /** Always `425`. @default 425 */
  status?: number;
  /** A human readable message that provides more context to the error. @default "Generic error" */
  message?: string;
  /** A list of details that further ellaborate on the error. */
  details?: ErrorDetail[];
};

export const error425ErrorSchema: Schema<Error425Error> = s.object<Error425Error>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "too_early"),
  status: s.defaulted(s.int(), 425),
  message: s.defaulted(s.string(), "Generic error"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
