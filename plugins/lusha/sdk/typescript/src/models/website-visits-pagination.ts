import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebsiteVisitsPagination = {
  size: number;
  page: number;
  /** Total results across all pages. */
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const websiteVisitsPaginationSchema: Schema<WebsiteVisitsPagination> =
  s.object<WebsiteVisitsPagination>(
    {
      size: s.int(),
      page: s.int(),
      total: s.int(),
    },
    { additionalProperties: s.json() },
  );
