import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sslCertificateSchema, type SslCertificate } from "./ssl-certificate.js";

export type SslResponse = {
  domainName?: string;
  queryTime?: string;
  sslCertificates?: SslCertificate[];
  sslRaw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslResponseSchema: Schema<SslResponse> = s.object<SslResponse>(
  {
    domainName: s.optional(s.string()),
    queryTime: s.optional(s.string()),
    sslCertificates: s.optional(s.array(s.lazy(() => sslCertificateSchema))),
    sslRaw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
