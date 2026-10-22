import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error401Error = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `unauthorized` @default "unauthorized" */
  code?: string;
  /** Always `401`. @default 401 */
  status?: number;
  /**
   * A human readable message that provides more context to the error.
   *
   * @default "No valid API authentication found"
   */
  message?: string;
  /** A list of details that further ellaborate on the error. */
  details?: ErrorDetail[];
};

export const error401ErrorSchema: Schema<Error401Error> = s.object<Error401Error>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "unauthorized"),
  status: s.defaulted(s.int(), 401),
  message: s.defaulted(s.string(), "No valid API authentication found"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
