import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicCertificateAuthoritySchema,
  type PublicCertificateAuthority,
} from "./public-certificate-authority.js";

/** Exactly one member is set. */
export type CertificateAuthority = {
  publicCertificateAuthority?: PublicCertificateAuthority;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const certificateAuthoritySchema: Schema<CertificateAuthority> = s.object<CertificateAuthority>(
  {
    publicCertificateAuthority: s.optional(s.lazy(() => publicCertificateAuthoritySchema)),
    _keysMap: {
      publicCertificateAuthority: "PublicCertificateAuthority",
    },
  },
  { additionalProperties: s.json() },
);
