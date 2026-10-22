import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The type of error code to simulate. */
export type ErrorCode2 = string;

export const errorCode2Schema: Schema<ErrorCode2> = s.of<ErrorCode2>(s.union([s.string()]));
