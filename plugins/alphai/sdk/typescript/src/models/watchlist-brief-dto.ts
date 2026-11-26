import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { briefEarningsDateDtoSchema, type BriefEarningsDateDto } from "./brief-earnings-date-dto.js";
import { briefEventDtoSchema, type BriefEventDto } from "./brief-event-dto.js";

export type WatchlistBriefDto = {
  generatedAt: Date;
  windowStart: Date;
  windowEnd: Date;
  hours: number;
  tickers: string[];
  unknownTickers: string[];
  events: BriefEventDto[];
  filings: BriefEventDto[];
  upcomingEarnings: BriefEarningsDateDto[];
  /** @default false */
  eventsTruncated?: boolean;
  /** @default false */
  filingsTruncated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const watchlistBriefDtoSchema: Schema<WatchlistBriefDto> = s.object<WatchlistBriefDto>(
  {
    generatedAt: s.dateTime(),
    windowStart: s.dateTime(),
    windowEnd: s.dateTime(),
    hours: s.int(),
    tickers: s.array(s.string()),
    unknownTickers: s.array(s.string()),
    events: s.array(s.lazy(() => briefEventDtoSchema)),
    filings: s.array(s.lazy(() => briefEventDtoSchema)),
    upcomingEarnings: s.array(s.lazy(() => briefEarningsDateDtoSchema)),
    eventsTruncated: s.defaulted(s.boolean(), false),
    filingsTruncated: s.defaulted(s.boolean(), false),
    _keysMap: {
      generatedAt: "generated_at",
      windowStart: "window_start",
      windowEnd: "window_end",
      unknownTickers: "unknown_tickers",
      upcomingEarnings: "upcoming_earnings",
      eventsTruncated: "events_truncated",
      filingsTruncated: "filings_truncated",
    },
  },
  { additionalProperties: s.json() },
);
