import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source2ReportingReportsApi = {
  /** The location to the object or attribute that the error relates to */
  pointer?: string;
  /** A string indicating which URI query parameter caused the error. */
  parameter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const source2ReportingReportsApiSchema: Schema<Source2ReportingReportsApi> =
  s.object<Source2ReportingReportsApi>(
    {
      pointer: s.optional(s.string()),
      parameter: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
