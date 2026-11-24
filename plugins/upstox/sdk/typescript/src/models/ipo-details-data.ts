import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipoInvestorTypeSchema, type IpoInvestorType } from "./ipo-investor-type.js";
import { ipoRegistrarInfo1Schema, type IpoRegistrarInfo1 } from "./ipo-registrar-info1.js";
import { ipoTimeline1Schema, type IpoTimeline1 } from "./ipo-timeline1.js";
import { issueTypeSchema, type IssueType } from "./issue-type.js";
import { status1Schema, type Status1 } from "./status1.js";

export type IpoDetailsData = {
  /** IPO id (slug). Pass this as the id to the apply API */
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
  /** Time bidding opens each day, in HH:mm IST */
  dailyStartTime?: string;
  /** Time bidding closes each day, in HH:mm IST */
  dailyEndTime?: string;
  /** Face value of one share */
  faceValue?: number;
  /** Minimum price increment for a bid */
  tickSize?: number;
  /** Number of shares in one lot */
  lotSize?: number;
  /** Smallest quantity that can be bid for; bids must be in multiples of the lot size */
  minimumQuantity?: number;
  /** Cut-off price for retail applications */
  cutOffPrice?: number;
  /** Price the share listed at; null until listing */
  listingPrice?: number;
  /** Exchange(s) the issue lists on. Comma-separated when the issue lists on more than one */
  listingExchange?: string;
  /** Link to the Red Herring Prospectus */
  rhpUrl?: string;
  /** Link to the Draft Red Herring Prospectus */
  drhpUrl?: string;
  /** Key dates for the issue, from pre-apply through listing */
  timeline?: IpoTimeline1;
  /** Registrar handling the issue */
  registrarInfo?: IpoRegistrarInfo1;
  /** Overall subscription so far; null until the issue opens */
  totalSubscription?: string;
  /** Investor categories the issue accepts */
  investors?: IpoInvestorType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoDetailsDataSchema: Schema<IpoDetailsData> = s.object<IpoDetailsData>(
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
    dailyStartTime: s.optional(s.string()),
    dailyEndTime: s.optional(s.string()),
    faceValue: s.optional(s.float64()),
    tickSize: s.optional(s.float64()),
    lotSize: s.optional(s.int()),
    minimumQuantity: s.optional(s.int()),
    cutOffPrice: s.optional(s.float64()),
    listingPrice: s.optional(s.float64()),
    listingExchange: s.optional(s.string()),
    rhpUrl: s.optional(s.string()),
    drhpUrl: s.optional(s.string()),
    timeline: s.optional(s.lazy(() => ipoTimeline1Schema)),
    registrarInfo: s.optional(s.lazy(() => ipoRegistrarInfo1Schema)),
    totalSubscription: s.optional(s.string()),
    investors: s.optional(s.array(s.lazy(() => ipoInvestorTypeSchema))),
    _keysMap: {
      issueType: "issue_type",
      issueSize: "issue_size",
      minimumPrice: "minimum_price",
      maximumPrice: "maximum_price",
      biddingStartDate: "bidding_start_date",
      biddingEndDate: "bidding_end_date",
      dailyStartTime: "daily_start_time",
      dailyEndTime: "daily_end_time",
      faceValue: "face_value",
      tickSize: "tick_size",
      lotSize: "lot_size",
      minimumQuantity: "minimum_quantity",
      cutOffPrice: "cut_off_price",
      listingPrice: "listing_price",
      listingExchange: "listing_exchange",
      rhpUrl: "rhp_url",
      drhpUrl: "drhp_url",
      registrarInfo: "registrar_info",
      totalSubscription: "total_subscription",
    },
  },
  { additionalProperties: s.json() },
);
