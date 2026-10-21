import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSchema, type Client } from "./client.js";

export type ClientSearchResponse = {
  /** The clamped requested limit of clients to return from the request. */
  limit?: number;
  /**
   * If there are more matching entries to retrieve this value will be generated and returned. The
   * next call to this endpoint should use this value as the `cursor` to continue to retrieve the
   * remaining clients from the correct point. If there are no further matching clients, or the
   * search pagination limit has been reached, this property will not be set.
   */
  nextCursor?: string;
  /**
   * The total number of clients in the service that match the search query. This doesn't mean the
   * number of clients contained in the response. Only set when `includeTotalCount` is `true` in the
   * request.
   */
  totalCount?: number;
  /** The list of clients matching the search query. */
  entities?: Client[];
};

export const clientSearchResponseSchema: Schema<ClientSearchResponse> = s.object<ClientSearchResponse>({
  limit: s.optional(s.int()),
  nextCursor: s.optional(s.string()),
  totalCount: s.optional(s.int()),
  entities: s.optional(s.array(s.lazy(() => clientSchema))),
});
