import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filter1Schema, type Filter1 } from "./filter1.js";
import { linksPlatformEventsApiSchema, type LinksPlatformEventsApi } from "./links-platform-events-api.js";

export type Datum5ReportingReportsApi = {
  type?: string;
  id?: string;
  title?: string;
  reportType?: string;
  createdDate?: string;
  expiresAt?: string;
  createdBy?: string;
  filters?: Filter1[];
  links?: LinksPlatformEventsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum5ReportingReportsApiSchema: Schema<Datum5ReportingReportsApi> =
  s.object<Datum5ReportingReportsApi>(
    {
      type: s.optional(s.string()),
      id: s.optional(s.string()),
      title: s.optional(s.string()),
      reportType: s.optional(s.string()),
      createdDate: s.optional(s.string()),
      expiresAt: s.optional(s.string()),
      createdBy: s.optional(s.string()),
      filters: s.optional(s.array(s.lazy(() => filter1Schema))),
      links: s.optional(s.lazy(() => linksPlatformEventsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
