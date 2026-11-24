import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const CodeOddsRelayDiscoveryApi = {
  TooManyRequests: "too_many_requests",
  TooManyFromAddress: "too_many_from_address",
} as const;
export type CodeOddsRelayDiscoveryApi =
  | (typeof CodeOddsRelayDiscoveryApi)[keyof typeof CodeOddsRelayDiscoveryApi]
  | (string & {});

export const codeOddsRelayDiscoveryApiSchema: EnumSchema<CodeOddsRelayDiscoveryApi> =
  s.enumOf<CodeOddsRelayDiscoveryApi>(CodeOddsRelayDiscoveryApi);
