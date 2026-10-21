import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientLimitedSchema, type ClientLimited } from "./client-limited.js";

export type ClientAuthorizationGetListResponse = {
  /** Start index of search results (inclusive). */
  start?: number;
  /** End index of search results (exclusive). */
  end?: number;
  /** Unique ID of a client developer. */
  developer?: string;
  /** Unique user ID of an end-user. */
  subject?: string;
  /** Unique ID of a client developer. */
  totalCount?: number;
  /** An array of clients. */
  clients?: ClientLimited[];
};

export const clientAuthorizationGetListResponseSchema: Schema<ClientAuthorizationGetListResponse> =
  s.object<ClientAuthorizationGetListResponse>({
    start: s.optional(s.int()),
    end: s.optional(s.int()),
    developer: s.optional(s.string()),
    subject: s.optional(s.string()),
    totalCount: s.optional(s.int()),
    clients: s.optional(s.array(s.lazy(() => clientLimitedSchema))),
  });
