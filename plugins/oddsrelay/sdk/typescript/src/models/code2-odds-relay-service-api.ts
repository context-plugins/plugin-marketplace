import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code2OddsRelayServiceApi = {
  TemporarilyUnavailable: "temporarily_unavailable",
  RawNotEnabled: "raw_not_enabled",
} as const;
export type Code2OddsRelayServiceApi =
  | (typeof Code2OddsRelayServiceApi)[keyof typeof Code2OddsRelayServiceApi]
  | (string & {});

export const code2OddsRelayServiceApiSchema: EnumSchema<Code2OddsRelayServiceApi> =
  s.enumOf<Code2OddsRelayServiceApi>(Code2OddsRelayServiceApi);
