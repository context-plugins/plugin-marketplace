import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** API Version status. */
export const StatusEinsteinBotsApiBetaVersionsApi = {
  Active: "ACTIVE",
  Deprecated: "DEPRECATED",
} as const;
export type StatusEinsteinBotsApiBetaVersionsApi =
  | (typeof StatusEinsteinBotsApiBetaVersionsApi)[keyof typeof StatusEinsteinBotsApiBetaVersionsApi]
  | (string & {});

export const statusEinsteinBotsApiBetaVersionsApiSchema: EnumSchema<StatusEinsteinBotsApiBetaVersionsApi> =
  s.enumOf<StatusEinsteinBotsApiBetaVersionsApi>(StatusEinsteinBotsApiBetaVersionsApi);
