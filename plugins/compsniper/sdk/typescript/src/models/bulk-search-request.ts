import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bulkSearchOptionsInternalSchema,
  bulkSearchOptionsSchema,
  type BulkSearchOptions,
} from "./bulk-search-options.js";

export type BulkSearchRequest = {
  /**
   * Case-insensitively deduplicated product keywords. Each keyword may contain at most 300
   * characters.
   */
  keywords: string[];
  /** Shared page-one options applied independently to every keyword. */
  options?: BulkSearchOptions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkSearchRequestProperties: s.Shape<BulkSearchRequest> = {
  keywords: s.array(s.string()),
  options: s.optional(s.lazy(() => bulkSearchOptionsInternalSchema)),
};

export const bulkSearchRequestInternalSchema: Schema<BulkSearchRequest> = s.object<BulkSearchRequest>(
  bulkSearchRequestProperties,
  { additionalProperties: s.json() },
);

export const bulkSearchRequestSchema: Schema<BulkSearchRequest> = s.lazySchema(() =>
  s.object<BulkSearchRequest>(
    {
      ...bulkSearchRequestProperties,
      keywords: s.array(s.string().check(s.maxLength(300))).check(s.minLength(1), s.maxLength(20)),
      options: s.optional(s.lazy(() => bulkSearchOptionsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
