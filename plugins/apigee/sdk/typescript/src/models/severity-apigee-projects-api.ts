import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Severity level of the rule violation. */
export const SeverityApigeeProjectsApi = {
  SeverityUnspecified: "SEVERITY_UNSPECIFIED",
  SeverityError: "SEVERITY_ERROR",
  SeverityWarning: "SEVERITY_WARNING",
  SeverityInfo: "SEVERITY_INFO",
  SeverityHint: "SEVERITY_HINT",
} as const;
export type SeverityApigeeProjectsApi =
  | (typeof SeverityApigeeProjectsApi)[keyof typeof SeverityApigeeProjectsApi]
  | (string & {});

export const severityApigeeProjectsApiSchema: EnumSchema<SeverityApigeeProjectsApi> =
  s.enumOf<SeverityApigeeProjectsApi>(SeverityApigeeProjectsApi);
