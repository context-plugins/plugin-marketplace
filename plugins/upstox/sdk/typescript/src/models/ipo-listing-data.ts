import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipoInvestorTypeSchema, type IpoInvestorType } from "./ipo-investor-type.js";
import { issueTypeSchema, type IssueType } from "./issue-type.js";
import { status1Schema, type Status1 } from "./status1.js";

export type IpoListingData = {
  /** IPO id (slug). Pass this as the id to the IPO details and apply APIs */
  id?: string;
  /** Trading symbol of the issuer */
  symbol?: string;
  /** Name of the issuer */
  name?: string;
  /** Current stage of the IPO */
  status?: Status1;
  /** ISIN of the issue */
  isin?: string;
  /** Issue type of the IPO. `regular` is a mainboard issue */
  issueType?: IssueType;
  /** Total issue size in crores */
  issueSize?: number;
  /** Industry the issuer operates in */
  industry?: string;
  /** Lower end of the price band, per share */
  minimumPrice?: number;
  /** Upper end of the price band, per share */
  maximumPrice?: number;
  /** Date bidding opens, in yyyy-MM-dd */
  biddingStartDate?: string;
  /** Date bidding closes, in yyyy-MM-dd */
  biddingEndDate?: string;
  /** Overall subscription so far; null until the issue opens */
  totalSubscription?: string;
  /**
   * Investor categories the issue accepts. Empty when the listing data carries none — the IPO
   * details API is the authoritative source
   */
  investors?: IpoInvestorType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoListingDataSchema: Schema<IpoListingData> = s.object<IpoListingData>(
  {
    id: s.optional(s.string()),
    symbol: s.optional(s.string()),
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1Schema)),
    isin: s.optional(s.string()),
    issueType: s.optional(s.lazy(() => issueTypeSchema)),
    issueSize: s.optional(s.float64()),
    industry: s.optional(s.string()),
    minimumPrice: s.optional(s.float64()),
    maximumPrice: s.optional(s.float64()),
    biddingStartDate: s.optional(s.string()),
    biddingEndDate: s.optional(s.string()),
    totalSubscription: s.optional(s.string()),
    investors: s.optional(s.array(s.lazy(() => ipoInvestorTypeSchema))),
    _keysMap: {
      issueType: "issue_type",
      issueSize: "issue_size",
      minimumPrice: "minimum_price",
      maximumPrice: "maximum_price",
      biddingStartDate: "bidding_start_date",
      biddingEndDate: "bidding_end_date",
      totalSubscription: "total_subscription",
    },
  },
  { additionalProperties: s.json() },
);
