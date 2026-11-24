import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SupportedFields = {
  articles?: string[];
  stories?: string[];
  events?: string[];
  eventTypes?: string[];
  calendarEvents?: string[];
  categories?: string[];
  companies?: string[];
  countries?: string[];
  exchanges?: string[];
  indices?: string[];
  sources?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supportedFieldsSchema: Schema<SupportedFields> = s.object<SupportedFields>(
  {
    articles: s.optional(s.array(s.string())),
    stories: s.optional(s.array(s.string())),
    events: s.optional(s.array(s.string())),
    eventTypes: s.optional(s.array(s.string())),
    calendarEvents: s.optional(s.array(s.string())),
    categories: s.optional(s.array(s.string())),
    companies: s.optional(s.array(s.string())),
    countries: s.optional(s.array(s.string())),
    exchanges: s.optional(s.array(s.string())),
    indices: s.optional(s.array(s.string())),
    sources: s.optional(s.array(s.string())),
    _keysMap: {
      eventTypes: "event_types",
      calendarEvents: "calendar_events",
    },
  },
  { additionalProperties: s.json() },
);
