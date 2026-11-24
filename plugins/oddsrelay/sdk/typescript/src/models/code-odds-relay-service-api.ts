import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const CodeOddsRelayServiceApi = {
  NotFound: "not_found",
  UnknownType: "unknown_type",
  UnknownRegion: "unknown_region",
  UnknownEvent: "unknown_event",
} as const;
export type CodeOddsRelayServiceApi =
  | (typeof CodeOddsRelayServiceApi)[keyof typeof CodeOddsRelayServiceApi]
  | (string & {});

export const codeOddsRelayServiceApiSchema: EnumSchema<CodeOddsRelayServiceApi> =
  s.enumOf<CodeOddsRelayServiceApi>(CodeOddsRelayServiceApi);
