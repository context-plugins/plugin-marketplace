import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. The error code of the last execution of the curation. The error code is populated
 * only when the last execution state is failed.
 */
export const LastExecutionErrorCode = {
  ErrorCodeUnspecified: "ERROR_CODE_UNSPECIFIED",
  InternalError: "INTERNAL_ERROR",
  Unauthorized: "UNAUTHORIZED",
} as const;
export type LastExecutionErrorCode =
  | (typeof LastExecutionErrorCode)[keyof typeof LastExecutionErrorCode]
  | (string & {});

export const lastExecutionErrorCodeSchema: EnumSchema<LastExecutionErrorCode> =
  s.enumOf<LastExecutionErrorCode>(LastExecutionErrorCode);
