import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ErrorCode = string;

export const errorCodeSchema: Schema<ErrorCode> = s.of<ErrorCode>(s.union([s.string()]));
