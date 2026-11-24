import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { changeSchema, type Change } from "./change.js";
import {
  companyCompabaseWatchlistApiSchema,
  type CompanyCompabaseWatchlistApi,
} from "./company-compabase-watchlist-api.js";
import { eventSchema, type Event } from "./event.js";

/** Payload POSTed to your webhook URL when a watched company changes. */
export type WatchlistWebhookEvent = {
  /** Event type (also sent in the `X-Compabase-Event` header). */
  event: Event;
  company: CompanyCompabaseWatchlistApi;
  detectedAt: Date;
  /** Field-level changes, when the event has them. */
  changes?: Change[];
  /** Source register for registry events (e.g. KRZ, MSiG, BZP). */
  registry?: string;
  /** Change of the register counter for registry events. */
  delta?: number;
  /** Newly filed financial statement (financials_updated). */
  filing?: Record<string, unknown>;
  /** Newest articles (company_news). */
  news?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistWebhookEventSchema: Schema<WatchlistWebhookEvent> = s.object<WatchlistWebhookEvent>(
  {
    event: eventSchema,
    company: companyCompabaseWatchlistApiSchema,
    detectedAt: s.dateTime(),
    changes: s.optional(s.array(s.lazy(() => changeSchema))),
    registry: s.optional(s.string()),
    delta: s.optional(s.float64()),
    filing: s.optional(s.record(s.string(), s.unknown())),
    news: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      detectedAt: "detected_at",
    },
  },
  { additionalProperties: s.json() },
);
