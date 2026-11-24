import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scanSummaryInternalSchema, scanSummarySchema, type ScanSummary } from "./scan-summary.js";

/** Paginated list of scans owned by the API key. */
export type ScanListResponse = {
  data: ScanSummary[];
  nextCursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scanListResponseProperties: s.Shape<ScanListResponse> = {
  data: s.array(s.lazy(() => scanSummaryInternalSchema)),
  nextCursor: s.optional(s.string()),
};

export const scanListResponseInternalSchema: Schema<ScanListResponse> = s.object<ScanListResponse>(
  scanListResponseProperties,
  { additionalProperties: s.json() },
);

export const scanListResponseSchema: Schema<ScanListResponse> = s.lazySchema(() =>
  s.object<ScanListResponse>(
    {
      ...scanListResponseProperties,
      data: s.array(s.lazy(() => scanSummarySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
