import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sectorMarketCapAmount1Schema, type SectorMarketCapAmount1 } from "./sector-market-cap-amount1.js";
import { sectorMarketCapAmount2Schema, type SectorMarketCapAmount2 } from "./sector-market-cap-amount2.js";

export type CompetitorData = {
  /** Business description of the company */
  companyProfile?: string;
  /** Sector the company belongs to */
  sector?: string;
  /** Sector market capitalisation in INR */
  sectorMarketCapInr?: SectorMarketCapAmount2;
  /** Sector market capitalisation in USD */
  sectorMarketCapUsd?: SectorMarketCapAmount1;
  /** Instrument key of the competitor company */
  instrumentKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const competitorDataSchema: Schema<CompetitorData> = s.object<CompetitorData>(
  {
    companyProfile: s.optional(s.string()),
    sector: s.optional(s.string()),
    sectorMarketCapInr: s.optional(s.lazy(() => sectorMarketCapAmount2Schema)),
    sectorMarketCapUsd: s.optional(s.lazy(() => sectorMarketCapAmount1Schema)),
    instrumentKey: s.optional(s.string()),
    _keysMap: {
      companyProfile: "company_profile",
      sectorMarketCapInr: "sector_market_cap_inr",
      sectorMarketCapUsd: "sector_market_cap_usd",
      instrumentKey: "instrument_key",
    },
  },
  { additionalProperties: s.json() },
);
