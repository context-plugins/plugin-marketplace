import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transportSchema, type Transport } from "./transport.js";

/**
 * Registration-trunk settings, for a PBX with no static public IP. Never contains the password or
 * its digest.
 */
export type Registration = {
  /** Whether this trunk authenticates by registration rather than by source IP. */
  enabled?: boolean;
  /** The SIP username your PBX registers with. */
  username?: string | null;
  /** SIP domain / digest realm. */
  domain?: string;
  /** Host and port your PBX registers to. */
  server?: string;
  /** Registration trunks are TLS-only. */
  transport?: Transport;
  passwordSetAt?: Date | null;
  /** True when your PBX is registered right now. */
  registered?: boolean;
  lastRegisteredAt?: Date | null;
  /** The address your PBX last registered from. */
  lastRegisteredIp?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registrationSchema: Schema<Registration> = s.object<Registration>(
  {
    enabled: s.optional(s.boolean()),
    username: s.optionalNullable(s.string()),
    domain: s.optional(s.string()),
    server: s.optional(s.string()),
    transport: s.optional(s.lazy(() => transportSchema)),
    passwordSetAt: s.optionalNullable(s.dateTime()),
    registered: s.optional(s.boolean()),
    lastRegisteredAt: s.optionalNullable(s.dateTime()),
    lastRegisteredIp: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
