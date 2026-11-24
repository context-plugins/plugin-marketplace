import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code4OddsRelayServiceApi = {
  TooManyRequests: "too_many_requests",
  TooManyFromAddress: "too_many_from_address",
} as const;
export type Code4OddsRelayServiceApi =
  | (typeof Code4OddsRelayServiceApi)[keyof typeof Code4OddsRelayServiceApi]
  | (string & {});

export const code4OddsRelayServiceApiSchema: EnumSchema<Code4OddsRelayServiceApi> =
  s.enumOf<Code4OddsRelayServiceApi>(Code4OddsRelayServiceApi);
