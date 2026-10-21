import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessTokenSchema, type AccessToken } from "./access-token.js";
import { clientLimitedSchema, type ClientLimited } from "./client-limited.js";

export type TokenGetListResponse = {
  /** Start index of search results (inclusive). */
  start?: number;
  /** End index of search results (exclusive). */
  end?: number;
  /** Unique ID of a client developer. */
  totalCount?: number;
  client?: ClientLimited;
  /** Unique user ID of an end-user. */
  subject?: string;
  /** An array of access tokens. */
  accessTokens?: AccessToken[];
};

export const tokenGetListResponseSchema: Schema<TokenGetListResponse> = s.object<TokenGetListResponse>({
  start: s.optional(s.int()),
  end: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  client: s.optional(s.lazy(() => clientLimitedSchema)),
  subject: s.optional(s.string()),
  accessTokens: s.optional(s.array(s.lazy(() => accessTokenSchema))),
});
