import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The kind of event (omitted on a tombstone) */
export type EventTypeNordicFinancialNewsCompaniesApi = {
  slug?: string;
  label?: string;
  category?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventTypeNordicFinancialNewsCompaniesApiSchema: Schema<EventTypeNordicFinancialNewsCompaniesApi> =
  s.object<EventTypeNordicFinancialNewsCompaniesApi>(
    {
      slug: s.optional(s.string()),
      label: s.optional(s.string()),
      category: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
