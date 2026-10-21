import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationProtocolSchema, type AuthenticationProtocol } from "./authentication-protocol.js";

/** SNMPv3 user configuration, including authentication and privacy protocol settings. */
export type V3User = {
  /** Username for the SNMPv3 user. */
  name?: string;
  /** Authentication protocol for the SNMPv3 user. */
  authProtocol?: AuthenticationProtocol;
  /** Privacy protocol for SNMPv3 encryption. */
  privProtocol?: string;
};

export const v3UserSchema: Schema<V3User> = s.object<V3User>({
  name: s.optional(s.string()),
  authProtocol: s.optional(s.lazy(() => authenticationProtocolSchema)),
  privProtocol: s.optional(s.string()),
});
