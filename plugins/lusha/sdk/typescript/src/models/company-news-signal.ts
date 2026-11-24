import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyNewsSignal = {
  companyId?: string;
  companyName?: string;
  domain?: string;
  signalId?: string;
  eventType?: string;
  eventSummary?: string;
  articlePublishedDate?: string;
  articleTitle?: string;
  articleHighlight?: string;
  eventEffectiveDate?: string;
  articleUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyNewsSignalProperties: s.Shape<CompanyNewsSignal> = {
  companyId: s.optional(s.string()),
  companyName: s.optional(s.string()),
  domain: s.optional(s.string()),
  signalId: s.optional(s.string()),
  eventType: s.optional(s.string()),
  eventSummary: s.optional(s.string()),
  articlePublishedDate: s.optional(s.dateOnly()),
  articleTitle: s.optional(s.string()),
  articleHighlight: s.optional(s.string()),
  eventEffectiveDate: s.optional(s.dateOnly()),
  articleUrl: s.optional(s.string()),
};

export const companyNewsSignalInternalSchema: Schema<CompanyNewsSignal> = s.object<CompanyNewsSignal>(
  companyNewsSignalProperties,
  { additionalProperties: s.json() },
);

export const companyNewsSignalSchema: Schema<CompanyNewsSignal> = s.lazySchema(() =>
  s.object<CompanyNewsSignal>(
    {
      ...companyNewsSignalProperties,
      articleUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
