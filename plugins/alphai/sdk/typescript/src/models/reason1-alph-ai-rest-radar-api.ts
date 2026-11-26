import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason1AlphAiRestRadarApi = {
  NonSecSymbol: "non_sec_symbol",
  UnknownSymbol: "unknown_symbol",
  MissingCik: "missing_cik",
  IssuerChanged: "issuer_changed",
} as const;
export type Reason1AlphAiRestRadarApi =
  | (typeof Reason1AlphAiRestRadarApi)[keyof typeof Reason1AlphAiRestRadarApi]
  | (string & {});

export const reason1AlphAiRestRadarApiSchema: EnumSchema<Reason1AlphAiRestRadarApi> =
  s.enumOf<Reason1AlphAiRestRadarApi>(Reason1AlphAiRestRadarApi);
