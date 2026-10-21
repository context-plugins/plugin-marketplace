import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSchema, type Client } from "./client.js";

export type ClientGetListResponse = {
  /** Start index (inclusive) of the result set of the query. */
  start?: number;
  /** End index (exclusive) of the result set of the query. */
  end?: number;
  /**
   * Total number of clients that belong to the service. This doesn't mean the number of clients
   * contained in the response.
   */
  totalCount?: number;
  /** An array of clients. */
  clients?: Client[];
};

export const clientGetListResponseSchema: Schema<ClientGetListResponse> = s.object<ClientGetListResponse>({
  start: s.optional(s.int()),
  end: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  clients: s.optional(s.array(s.lazy(() => clientSchema))),
});
