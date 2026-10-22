import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformProblemDetailCodeSchema,
  type PlatformProblemDetailCode,
} from "./platform-problem-detail-code.js";
import {
  platformProblemDetailErrorSchema,
  type PlatformProblemDetailError,
} from "./platform-problem-detail-error.js";

/** The failure as a problem detail. */
export type PlatformProblemDetail1 = {
  /** URI identifying the error type. */
  type: string;
  /** Short, human-readable summary of the error. */
  title: string;
  /** HTTP status code mirrored from the response. */
  status: number;
  /** Human-readable explanation specific to this occurrence. */
  detail: string;
  /** Stable machine-readable error code. */
  code: PlatformProblemDetailCode;
  /** Direct URL to documentation for this error code. */
  documentationUrl?: string;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
  /** Field-level validation problems, one entry per offending field. */
  errors?: PlatformProblemDetailError[];
};

export const platformProblemDetail1Schema: Schema<PlatformProblemDetail1> = s.object<PlatformProblemDetail1>({
  type: s.string(),
  title: s.string(),
  status: s.int(),
  detail: s.string(),
  code: platformProblemDetailCodeSchema,
  documentationUrl: s.optional(s.string()),
  requestId: s.string(),
  errors: s.optional(s.array(s.lazy(() => platformProblemDetailErrorSchema))),
  _keysMap: {
    documentationUrl: "documentation_url",
    requestId: "request_id",
  },
});
