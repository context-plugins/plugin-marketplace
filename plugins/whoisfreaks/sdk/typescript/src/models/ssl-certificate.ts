import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sslExtensionsInfoSchema, type SslExtensionsInfo } from "./ssl-extensions-info.js";
import { sslPublicKeyInfoSchema, type SslPublicKeyInfo } from "./ssl-public-key-info.js";
import { sslUnitInfoSchema, type SslUnitInfo } from "./ssl-unit-info.js";

export type SslCertificate = {
  chainOrder?: string;
  authenticationType?: string;
  validityStartDate?: string;
  validityEndDate?: string;
  serialNumber?: string;
  signatureAlgorithm?: string;
  subject?: SslUnitInfo;
  issuer?: SslUnitInfo;
  publicKey?: SslPublicKeyInfo;
  extensions?: SslExtensionsInfo;
  pemRaw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslCertificateSchema: Schema<SslCertificate> = s.object<SslCertificate>(
  {
    chainOrder: s.optional(s.string()),
    authenticationType: s.optional(s.string()),
    validityStartDate: s.optional(s.string()),
    validityEndDate: s.optional(s.string()),
    serialNumber: s.optional(s.string()),
    signatureAlgorithm: s.optional(s.string()),
    subject: s.optional(s.lazy(() => sslUnitInfoSchema)),
    issuer: s.optional(s.lazy(() => sslUnitInfoSchema)),
    publicKey: s.optional(s.lazy(() => sslPublicKeyInfoSchema)),
    extensions: s.optional(s.lazy(() => sslExtensionsInfoSchema)),
    pemRaw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
