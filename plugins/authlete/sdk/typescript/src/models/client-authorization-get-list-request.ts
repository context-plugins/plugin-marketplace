import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientAuthorizationGetListRequest = {
  /** Unique user ID of an end-user. */
  subject: string;
  /** Unique ID of a client developer. */
  developer?: string;
  /** Start index of search results (inclusive). */
  start?: number;
  /** End index of search results (exclusive). */
  end?: number;
};

export const clientAuthorizationGetListRequestSchema: Schema<ClientAuthorizationGetListRequest> =
  s.object<ClientAuthorizationGetListRequest>({
    subject: s.string(),
    developer: s.optional(s.string()),
    start: s.optional(s.int()),
    end: s.optional(s.int()),
  });
