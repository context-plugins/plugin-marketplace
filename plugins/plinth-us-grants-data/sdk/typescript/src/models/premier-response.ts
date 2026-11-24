import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { financialsSchema, type Financials } from "./unions/financials.js";
import { fundingReceivedSchema, type FundingReceived } from "./unions/funding-received.js";
import { geoFootprintSchema, type GeoFootprint } from "./unions/geo-footprint.js";
import { governanceSchema, type Governance } from "./unions/governance.js";
import { governmentFundingSchema, type GovernmentFunding } from "./unions/government-funding.js";
import { grantmakingSchema, type Grantmaking } from "./unions/grantmaking.js";
import { sourceTierSchema, type SourceTier } from "./unions/source-tier.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

/** Everything we hold on one organization, in one call. */
export type PremierResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  organization: Record<string, unknown>;
  financials?: Financials;
  grantmaking?: Grantmaking;
  fundingReceived?: FundingReceived;
  governance?: Governance;
  governmentFunding?: GovernmentFunding;
  geoFootprint?: GeoFootprint;
  /** Which layer answered: `universe` or a bespoke enrichment. */
  sourceTier?: SourceTier;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const premierResponseSchema: Schema<PremierResponse> = s.object<PremierResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    organization: s.record(s.string(), s.unknown()),
    financials: s.optional(s.lazy(() => financialsSchema)),
    grantmaking: s.optional(s.lazy(() => grantmakingSchema)),
    fundingReceived: s.optional(s.lazy(() => fundingReceivedSchema)),
    governance: s.optional(s.lazy(() => governanceSchema)),
    governmentFunding: s.optional(s.lazy(() => governmentFundingSchema)),
    geoFootprint: s.optional(s.lazy(() => geoFootprintSchema)),
    sourceTier: s.optional(s.lazy(() => sourceTierSchema)),
    _keysMap: {
      xPlinth: "x_plinth",
      fundingReceived: "funding_received",
      governmentFunding: "government_funding",
      geoFootprint: "geo_footprint",
      sourceTier: "source_tier",
    },
  },
  { additionalProperties: s.json() },
);
