import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The JSON response body received from the payment service. */
export type ResponseBody = Record<string, unknown>;

export const responseBodySchema: Schema<ResponseBody> = s.of<ResponseBody>(
  s.union([s.record(s.string(), s.unknown())]),
);
