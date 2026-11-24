import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  categoryNordicFinancialNewsEventTypesApiSchema,
  type CategoryNordicFinancialNewsEventTypesApi,
} from "./category-nordic-financial-news-event-types-api.js";

export type EventTypeSummary = {
  /** Unique event type identifier */
  id: string;
  /**
   * Event type slug: the value for the `event_type` filter on `GET /api/v1/events` only. `GET
   * /api/v1/calendar_events` takes a different, underscored vocabulary enumerated on that endpoint;
   * these slugs are not accepted there, and a few spellings overlap while denoting different
   * things.
   */
  slug: string;
  /** Event type display label */
  label: string;
  /** The broader category this type belongs to */
  category: CategoryNordicFinancialNewsEventTypesApi;
  /** One-line description of what this type covers */
  summary: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventTypeSummarySchema: Schema<EventTypeSummary> = s.object<EventTypeSummary>(
  {
    id: s.string(),
    slug: s.string(),
    label: s.string(),
    category: categoryNordicFinancialNewsEventTypesApiSchema,
    summary: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
