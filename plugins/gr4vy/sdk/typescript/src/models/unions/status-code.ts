import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The HTTP status code received from the payment service. */
export type StatusCode = number;

export const statusCodeSchema: Schema<StatusCode> = s.of<StatusCode>(s.union([s.int()]));
