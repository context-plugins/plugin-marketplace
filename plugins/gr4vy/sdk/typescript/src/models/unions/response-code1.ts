import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseCodeSchema, type ResponseCode } from "../response-code.js";

/** The type of response to simulate. */
export type ResponseCode1 = ResponseCode;

export const responseCode1Schema: Schema<ResponseCode1> = s.of<ResponseCode1>(
  s.union([s.lazy(() => responseCodeSchema)]),
);
