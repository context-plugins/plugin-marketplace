import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name1Schema, type Name1 } from "./name1.js";

export type ExtendedKeyUsage = {
  /** The name of an Extended Key Usage value. */
  name?: Name1;
  /**
   * An object identifier (OID) for the extension value. OIDs are strings of numbers separated by
   * periods. The following OIDs are defined in RFC 3280 and RFC 5280. 1.3.6.1.5.5.7.3.1
   * (TLS_WEB_SERVER_AUTHENTICATION) 1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION)
   * 1.3.6.1.5.5.7.3.3 (CODE_SIGNING) 1.3.6.1.5.5.7.3.4 (EMAIL_PROTECTION) 1.3.6.1.5.5.7.3.8
   * (TIME_STAMPING) 1.3.6.1.5.5.7.3.9 (OCSP_SIGNING) 1.3.6.1.5.5.7.3.5 (IPSEC_END_SYSTEM)
   * 1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL) 1.3.6.1.5.5.7.3.7 (IPSEC_USER)
   */
  oid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extendedKeyUsageSchema: Schema<ExtendedKeyUsage> = s.object<ExtendedKeyUsage>(
  {
    name: s.optional(s.lazy(() => name1Schema)),
    oid: s.optional(s.string()),
    _keysMap: {
      name: "Name",
      oid: "OID",
    },
  },
  { additionalProperties: s.json() },
);
