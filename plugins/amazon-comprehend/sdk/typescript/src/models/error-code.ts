import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Error code for the cause of the error. */
export const ErrorCode = {
  TextractBadPage: "TEXTRACT_BAD_PAGE",
  TextractProvisionedThroughputExceeded: "TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED",
  PageCharactersExceeded: "PAGE_CHARACTERS_EXCEEDED",
  PageSizeExceeded: "PAGE_SIZE_EXCEEDED",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
