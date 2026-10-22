import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeField = {
  LastViewedAt: "LAST_VIEWED_AT",
  VisitorsCount: "VISITORS_COUNT",
  RecentShares: "RECENT_SHARES",
  DocumentContent: "DOCUMENT_CONTENT",
  CustomMetadata: "CUSTOM_METADATA",
} as const;
export type IncludeField = (typeof IncludeField)[keyof typeof IncludeField] | (string & {});

export const includeFieldSchema: EnumSchema<IncludeField> = s.enumOf<IncludeField>(IncludeField);
