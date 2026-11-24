import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Present only when the operation was started against a saved report (run by id) and the report
 * still exists; omitted for ad hoc runs against an inline config.
 */
export const Type9DoiTReportsApi = {
  Custom: "custom",
  Preset: "preset",
} as const;
export type Type9DoiTReportsApi =
  | (typeof Type9DoiTReportsApi)[keyof typeof Type9DoiTReportsApi]
  | (string & {});

export const type9DoiTReportsApiSchema: EnumSchema<Type9DoiTReportsApi> =
  s.enumOf<Type9DoiTReportsApi>(Type9DoiTReportsApi);
