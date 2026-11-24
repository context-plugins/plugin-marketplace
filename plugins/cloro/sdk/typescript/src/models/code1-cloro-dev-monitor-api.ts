import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code1CloroDevMonitorApi = {
  MissingApiKey: "MISSING_API_KEY",
  InvalidApiKeyFormat: "INVALID_API_KEY_FORMAT",
  InvalidOrExpiredApiKey: "INVALID_OR_EXPIRED_API_KEY",
} as const;
export type Code1CloroDevMonitorApi =
  | (typeof Code1CloroDevMonitorApi)[keyof typeof Code1CloroDevMonitorApi]
  | (string & {});

export const code1CloroDevMonitorApiSchema: EnumSchema<Code1CloroDevMonitorApi> =
  s.enumOf<Code1CloroDevMonitorApi>(Code1CloroDevMonitorApi);
