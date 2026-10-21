import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions where the `error_code` matches one for the provided values. */
export type ErrorCode6 = string[];

export const errorCode6Schema: Schema<ErrorCode6> = s.of<ErrorCode6>(s.union([s.array(s.string())]));
