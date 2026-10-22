import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The standardized error code set by Gr4vy. */
export type ErrorCode = string;

export const errorCodeSchema: Schema<ErrorCode> = s.of<ErrorCode>(s.union([s.string()]));
