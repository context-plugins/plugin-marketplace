import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formSchema, type Form } from "./form.js";
import { eventDateSchema, type EventDate } from "./unions/event-date.js";
import { kind1Schema, type Kind1 } from "./unions/kind1.js";
import { newsPublishedSchema, type NewsPublished } from "./unions/news-published.js";
import { newsTitleSchema, type NewsTitle } from "./unions/news-title.js";
import { periodLabelSchema, type PeriodLabel } from "./unions/period-label.js";
import { primaryItemSchema, type PrimaryItem } from "./unions/primary-item.js";

export type RadarFilingContext = {
  form: Form;
  accessionNumber: string;
  filedAt: Date;
  observedAt: Date;
  secUrl: string;
  newsUid: string;
  /** Article title frozen at the context cutoff. */
  newsTitle?: NewsTitle;
  /** Article publication time for its AlphAI URL. */
  newsPublished?: NewsPublished;
  /**
   * An enriched article existed before the context cutoff. False on older snapshots without
   * metadata.
   *
   * @default false
   */
  hasArticle?: boolean;
  items?: string[];
  primaryItem?: PrimaryItem;
  eventDate?: EventDate;
  kind?: Kind1;
  periodLabel?: PeriodLabel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarFilingContextSchema: Schema<RadarFilingContext> = s.object<RadarFilingContext>(
  {
    form: formSchema,
    accessionNumber: s.string(),
    filedAt: s.dateTime(),
    observedAt: s.dateTime(),
    secUrl: s.string(),
    newsUid: s.string(),
    newsTitle: s.optional(s.lazy(() => newsTitleSchema)),
    newsPublished: s.optional(s.lazy(() => newsPublishedSchema)),
    hasArticle: s.defaulted(s.boolean(), false),
    items: s.optional(s.array(s.string())),
    primaryItem: s.optional(s.lazy(() => primaryItemSchema)),
    eventDate: s.optional(s.lazy(() => eventDateSchema)),
    kind: s.optional(s.lazy(() => kind1Schema)),
    periodLabel: s.optional(s.lazy(() => periodLabelSchema)),
    _keysMap: {
      accessionNumber: "accession_number",
      filedAt: "filed_at",
      observedAt: "observed_at",
      secUrl: "sec_url",
      newsUid: "news_uid",
      newsTitle: "news_title",
      newsPublished: "news_published",
      hasArticle: "has_article",
      primaryItem: "primary_item",
      eventDate: "event_date",
      periodLabel: "period_label",
    },
  },
  { additionalProperties: s.json() },
);
