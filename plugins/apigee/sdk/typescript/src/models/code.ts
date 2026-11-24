import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status code. */
export const Code = {
  Ok: "OK",
  Cancelled: "CANCELLED",
  Unknown: "UNKNOWN",
  InvalidArgument: "INVALID_ARGUMENT",
  DeadlineExceeded: "DEADLINE_EXCEEDED",
  NotFound: "NOT_FOUND",
  AlreadyExists: "ALREADY_EXISTS",
  PermissionDenied: "PERMISSION_DENIED",
  Unauthenticated: "UNAUTHENTICATED",
  ResourceExhausted: "RESOURCE_EXHAUSTED",
  FailedPrecondition: "FAILED_PRECONDITION",
  Aborted: "ABORTED",
  OutOfRange: "OUT_OF_RANGE",
  Unimplemented: "UNIMPLEMENTED",
  Internal: "INTERNAL",
  Unavailable: "UNAVAILABLE",
  DataLoss: "DATA_LOSS",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
