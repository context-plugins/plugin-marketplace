import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** HTTP status code, if available. */
export type HttpStatusCode = number;

export const httpStatusCodeSchema: Schema<HttpStatusCode> = s.of<HttpStatusCode>(s.union([s.int()]));
