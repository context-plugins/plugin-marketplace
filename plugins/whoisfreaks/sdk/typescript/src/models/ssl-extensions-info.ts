import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sslAlternateNamesSchema, type SslAlternateNames } from "./ssl-alternate-names.js";
import { sslAuthorityInfoSchema, type SslAuthorityInfo } from "./ssl-authority-info.js";
import { sslCertificatePolicySchema, type SslCertificatePolicy } from "./ssl-certificate-policy.js";

export type SslExtensionsInfo = {
  authorityKeyIdentifier?: string;
  subjectKeyIdentifier?: string;
  keyUsages?: string[];
  extendedKeyUsages?: string[];
  crlDistributionPoints?: string[];
  authorityInfoAccess?: SslAuthorityInfo;
  subjectAlternativeNames?: SslAlternateNames;
  certificatePolicies?: SslCertificatePolicy[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslExtensionsInfoSchema: Schema<SslExtensionsInfo> = s.object<SslExtensionsInfo>(
  {
    authorityKeyIdentifier: s.optional(s.string()),
    subjectKeyIdentifier: s.optional(s.string()),
    keyUsages: s.optional(s.array(s.string())),
    extendedKeyUsages: s.optional(s.array(s.string())),
    crlDistributionPoints: s.optional(s.array(s.string())),
    authorityInfoAccess: s.optional(s.lazy(() => sslAuthorityInfoSchema)),
    subjectAlternativeNames: s.optional(s.lazy(() => sslAlternateNamesSchema)),
    certificatePolicies: s.optional(s.array(s.lazy(() => sslCertificatePolicySchema))),
  },
  { additionalProperties: s.json() },
);
