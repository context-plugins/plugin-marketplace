import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { distinguishedNameSchema, type DistinguishedName } from "./distinguished-name.js";
import { otherNameSchema, type OtherName } from "./other-name.js";

/** Exactly one member is set. */
export type GeneralName = {
  directoryName?: DistinguishedName;
  /** Represents GeneralName as a DNS name. */
  dnsName?: string;
  /** Represents GeneralName as an IPv4 or IPv6 address. */
  ipAddress?: string;
  otherName?: OtherName;
  /** Represents GeneralName as an object identifier (OID). */
  registeredId?: string;
  /** Represents GeneralName as an RFC 822 email address. */
  rfc822Name?: string;
  /** Represents GeneralName as a URI. */
  uniformResourceIdentifier?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const generalNameSchema: Schema<GeneralName> = s.object<GeneralName>(
  {
    directoryName: s.optional(s.lazy(() => distinguishedNameSchema)),
    dnsName: s.optional(s.string()),
    ipAddress: s.optional(s.string()),
    otherName: s.optional(s.lazy(() => otherNameSchema)),
    registeredId: s.optional(s.string()),
    rfc822Name: s.optional(s.string()),
    uniformResourceIdentifier: s.optional(s.string()),
    _keysMap: {
      directoryName: "DirectoryName",
      dnsName: "DnsName",
      ipAddress: "IpAddress",
      otherName: "OtherName",
      registeredId: "RegisteredId",
      rfc822Name: "Rfc822Name",
      uniformResourceIdentifier: "UniformResourceIdentifier",
    },
  },
  { additionalProperties: s.json() },
);
