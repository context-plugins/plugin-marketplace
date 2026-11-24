import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links2ReportingReportsApi = {
  /** Self reference URL. */
  self?: string;
  /** Url to next result. */
  next?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links2ReportingReportsApiSchema: Schema<Links2ReportingReportsApi> =
  s.object<Links2ReportingReportsApi>(
    {
      self: s.optional(s.string()),
      next: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
