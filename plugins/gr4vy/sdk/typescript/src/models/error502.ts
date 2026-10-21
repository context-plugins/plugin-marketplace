import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorDetailSchema, type ErrorDetail } from "./error-detail.js";
import { Type20, type20Schema } from "./type20.js";

export type Error502 = {
  /** Always `error`. @default Type20.Error */
  type?: Type20;
  /** Always `bad_gateway` @default "bad_gateway" */
  code?: string;
  /** Always `502`. @default 502 */
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

export const error502Schema: Schema<Error502> = s.object<Error502>({
  type: s.defaulted(type20Schema, Type20.Error),
  code: s.defaulted(s.string(), "bad_gateway"),
  status: s.defaulted(s.int(), 502),
  message: s.defaulted(s.string(), "Request could not be processed"),
  details: s.optional(s.array(s.lazy(() => errorDetailSchema))),
});
