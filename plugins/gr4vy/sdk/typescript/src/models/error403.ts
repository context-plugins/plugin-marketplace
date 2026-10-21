import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error403 = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `forbidden` @default "forbidden" */
  code?: string;
  /** Always `403`. @default 403 */
  status?: number;
  /** A human readable message that provides more context to the error. @default "Generic error" */
  message?: string;
  /** A list of details that further ellaborate on the error. */
  details?: ErrorDetail[];
};

export const error403Schema: Schema<Error403> = s.object<Error403>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "forbidden"),
  status: s.defaulted(s.int(), 403),
  message: s.defaulted(s.string(), "Generic error"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
