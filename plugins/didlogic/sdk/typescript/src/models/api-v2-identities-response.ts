import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { identitySchema, type Identity } from "./identity.js";
import {
  paginationDidlogicComHlrLookupsApiSchema,
  type PaginationDidlogicComHlrLookupsApi,
} from "./pagination-didlogic-com-hlr-lookups-api.js";

export type ApiV2IdentitiesResponse = {
  /** List of identities */
  identities: Identity[];
  /** Pagination metadata */
  pagination: PaginationDidlogicComHlrLookupsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2IdentitiesResponseSchema: Schema<ApiV2IdentitiesResponse> =
  s.object<ApiV2IdentitiesResponse>(
    {
      identities: s.array(s.lazy(() => identitySchema)),
      pagination: paginationDidlogicComHlrLookupsApiSchema,
    },
    { additionalProperties: s.json() },
  );
