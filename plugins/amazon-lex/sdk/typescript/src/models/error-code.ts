import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The unique error code for the failed custom vocabulary item from the custom vocabulary list. */
export const ErrorCode = {
  DuplicateInput: "DUPLICATE_INPUT",
  ResourceDoesNotExist: "RESOURCE_DOES_NOT_EXIST",
  ResourceAlreadyExists: "RESOURCE_ALREADY_EXISTS",
  InternalServerFailure: "INTERNAL_SERVER_FAILURE",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
