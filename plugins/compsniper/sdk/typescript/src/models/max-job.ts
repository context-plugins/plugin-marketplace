import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditPreferenceSchema, type CreditPreference } from "./credit-preference.js";
import { delivery2Schema, type Delivery2 } from "./delivery2.js";
import { maxProgressInternalSchema, maxProgressSchema, type MaxProgress } from "./max-progress.js";
import { maxSummaryInternalSchema, maxSummarySchema, type MaxSummary } from "./max-summary.js";
import { soldItemInternalSchema, soldItemSchema, type SoldItem } from "./sold-item.js";
import {
  statusCompSniperMarketplaceAndShippingScrapeApiSchema,
  type StatusCompSniperMarketplaceAndShippingScrapeApi,
} from "./status-comp-sniper-marketplace-and-shipping-scrape-api.js";
import { terminationReasonSchema, type TerminationReason } from "./termination-reason.js";

export type MaxJob = {
  jobId: string;
  status: StatusCompSniperMarketplaceAndShippingScrapeApi;
  keyword: string;
  maxPages: number;
  pagesDone: number;
  itemsFound: number;
  totalResults?: string | null;
  createdAt: Date;
  startedAt?: Date | null;
  completedAt?: Date | null;
  updatedAt: Date;
  progress?: MaxProgress;
  terminationReason?: TerminationReason | null;
  creditPreference: CreditPreference;
  /** Temporary carried-over requests remaining. */
  rolloverBalance: number;
  creditBalance: number;
  resultsUrl?: string;
  error?: string | null;
  summary?: MaxSummary;
  delivery?: Delivery2;
  items?: SoldItem[];
  expiresAt?: Date;
  purchaseCreditsUrl?: string;
  upgradeUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const maxJobProperties: s.Shape<MaxJob> = {
  jobId: s.string(),
  status: statusCompSniperMarketplaceAndShippingScrapeApiSchema,
  keyword: s.string(),
  maxPages: s.int(),
  pagesDone: s.int(),
  itemsFound: s.int(),
  totalResults: s.optionalNullable(s.string()),
  createdAt: s.dateTime(),
  startedAt: s.optionalNullable(s.dateTime()),
  completedAt: s.optionalNullable(s.dateTime()),
  updatedAt: s.dateTime(),
  progress: s.optional(s.lazy(() => maxProgressInternalSchema)),
  terminationReason: s.optionalNullable(s.lazy(() => terminationReasonSchema)),
  creditPreference: creditPreferenceSchema,
  rolloverBalance: s.int(),
  creditBalance: s.int(),
  resultsUrl: s.optional(s.string()),
  error: s.optionalNullable(s.string()),
  summary: s.optional(s.lazy(() => maxSummaryInternalSchema)),
  delivery: s.optional(s.lazy(() => delivery2Schema)),
  items: s.optional(s.array(s.lazy(() => soldItemInternalSchema))),
  expiresAt: s.optional(s.dateTime()),
  purchaseCreditsUrl: s.optional(s.string()),
  upgradeUrl: s.optional(s.string()),
};

export const maxJobInternalSchema: Schema<MaxJob> = s.object<MaxJob>(maxJobProperties, {
  additionalProperties: s.json(),
});

export const maxJobSchema: Schema<MaxJob> = s.lazySchema(() =>
  s.object<MaxJob>(
    {
      ...maxJobProperties,
      progress: s.optional(s.lazy(() => maxProgressSchema)),
      summary: s.optional(s.lazy(() => maxSummarySchema)),
      items: s.optional(s.array(s.lazy(() => soldItemSchema))),
      purchaseCreditsUrl: s.optional(s.string().check(s.url())),
      upgradeUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
