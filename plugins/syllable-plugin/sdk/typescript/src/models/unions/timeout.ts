import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timeout in seconds for the HTTP request. Default 20 seconds when not set. */
export type Timeout = number;

export const timeoutSchema: Schema<Timeout> = s.of<Timeout>(s.union([s.float64()]));
