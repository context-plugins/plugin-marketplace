import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links4ReportingReportsApi = {
  /** link of report */
  self?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links4ReportingReportsApiSchema: Schema<Links4ReportingReportsApi> =
  s.object<Links4ReportingReportsApi>(
    {
      self: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
