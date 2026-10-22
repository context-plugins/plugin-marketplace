import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Optional JSON body for `/userAccount/initAuth`. Valid shapes include: omitting the body entirely,
 * sending `{}` (empty object), or `{ "email": "<address>" }`. Neither the body nor `email` is
 * required. When `email` is omitted or empty, the session is still created and `allowedMethods` /
 * `authProviders` are returned as usual; clients typically supply `email` later on
 * `/userAccount/authenticate`. The `email` property remains supported mainly for legacy clients and
 * backward compatibility.
 */
export type InitAuthRequest = {
  /**
   * Optional; retained for legacy reasons. When set, stored on the auth session for correlation
   * with later `/authenticate` calls (RFC 5321 compliant address).
   */
  email?: string;
};

export const initAuthRequestSchema: Schema<InitAuthRequest> = s.object<InitAuthRequest>({
  email: s.optional(s.string()),
});
