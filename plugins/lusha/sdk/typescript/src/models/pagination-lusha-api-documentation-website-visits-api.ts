import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaginationLushaApiDocumentationWebsiteVisitsApi = {
  size: number;
  page: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paginationLushaApiDocumentationWebsiteVisitsApiProperties: s.Shape<PaginationLushaApiDocumentationWebsiteVisitsApi> =
  {
    size: s.int(),
    page: s.int(),
  };

export const paginationLushaApiDocumentationWebsiteVisitsApiInternalSchema: Schema<PaginationLushaApiDocumentationWebsiteVisitsApi> =
  s.object<PaginationLushaApiDocumentationWebsiteVisitsApi>(
    paginationLushaApiDocumentationWebsiteVisitsApiProperties,
    { additionalProperties: s.json() },
  );

export const paginationLushaApiDocumentationWebsiteVisitsApiSchema: Schema<PaginationLushaApiDocumentationWebsiteVisitsApi> =
  s.lazySchema(() =>
    s.object<PaginationLushaApiDocumentationWebsiteVisitsApi>(
      {
        ...paginationLushaApiDocumentationWebsiteVisitsApiProperties,
        size: s.int().check(s.gte(1), s.lte(150)),
        page: s.int().check(s.gte(0)),
      },
      { additionalProperties: s.json() },
    ),
  );
