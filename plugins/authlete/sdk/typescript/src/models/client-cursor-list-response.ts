import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSchema, type Client } from "./client.js";

export type ClientCursorListResponse = {
  /** The clamped requested limit of clients to return from the request. */
  limit?: number;
  /**
   * If there are more entries to retrieve this value will be generated and returned. The next call
   * to this endpoint should use this value as the `cursor` to continue to continue to retrieve the
   * remaining clients from the correct point. If there are no further clients to list this property
   * will not be set.
   */
  nextCursor?: string;
  /**
   * The total number of clients that belong to the service. This doesn't mean the number of clients
   * contained in the response.
   */
  totalCount?: number;
  /** The list of clients. */
  entities?: Client[];
};

export const clientCursorListResponseSchema: Schema<ClientCursorListResponse> =
  s.object<ClientCursorListResponse>({
    limit: s.optional(s.int()),
    nextCursor: s.optional(s.string()),
    totalCount: s.optional(s.int()),
    entities: s.optional(s.array(s.lazy(() => clientSchema))),
  });
