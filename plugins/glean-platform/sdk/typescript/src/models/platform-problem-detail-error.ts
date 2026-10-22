import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformProblemDetailCodeSchema,
  type PlatformProblemDetailCode,
} from "./platform-problem-detail-code.js";

/** Field-level validation problem for a single offending field. */
export type PlatformProblemDetailError = {
  /** RFC 6901 JSON Pointer to the offending field. */
  pointer: string;
  /** Human-readable explanation for this field. */
  detail: string;
  /** Stable machine-readable error code. */
  code?: PlatformProblemDetailCode;
};

export const platformProblemDetailErrorSchema: Schema<PlatformProblemDetailError> =
  s.object<PlatformProblemDetailError>({
    pointer: s.string(),
    detail: s.string(),
    code: s.optional(s.lazy(() => platformProblemDetailCodeSchema)),
  });
