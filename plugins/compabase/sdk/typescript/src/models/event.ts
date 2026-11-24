import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Event type (also sent in the `X-Compabase-Event` header). */
export const Event = {
  WatchlistCompanyChanged: "watchlist.company_changed",
  WatchlistBoardChanged: "watchlist.board_changed",
  WatchlistOwnershipChanged: "watchlist.ownership_changed",
  WatchlistStatusChanged: "watchlist.status_changed",
  WatchlistCompanyRemovedFromRegistry: "watchlist.company_removed_from_registry",
  WatchlistFinancialsUpdated: "watchlist.financials_updated",
  WatchlistFilingOverdue: "watchlist.filing_overdue",
  WatchlistInsolvency: "watchlist.insolvency",
  WatchlistCourtGazette: "watchlist.court_gazette",
  WatchlistSecuredLiabilities: "watchlist.secured_liabilities",
  WatchlistSanctions: "watchlist.sanctions",
  WatchlistPublicTenders: "watchlist.public_tenders",
  WatchlistPublicAid: "watchlist.public_aid",
  WatchlistLicenses: "watchlist.licenses",
  WatchlistNfz: "watchlist.nfz",
  WatchlistTrademarks: "watchlist.trademarks",
  WatchlistJobOffers: "watchlist.job_offers",
  WatchlistContactChanged: "watchlist.contact_changed",
  WatchlistCompanyNews: "watchlist.company_news",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
