import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { distinguishedNameSchema, type DistinguishedName } from "./distinguished-name.js";
import { extendedKeyUsage2Schema, type ExtendedKeyUsage2 } from "./extended-key-usage2.js";
import { generalNameSchema, type GeneralName } from "./general-name.js";
import { keyAlgorithmSchema, type KeyAlgorithm } from "./key-algorithm.js";
import { keyUsage2Schema, type KeyUsage2 } from "./key-usage2.js";

export type X509Attributes = {
  issuer?: DistinguishedName;
  subject?: DistinguishedName;
  /**
   * One or more domain names (subject alternative names) included in the certificate. This list
   * contains the domain names that are bound to the public key that is contained in the
   * certificate. The subject alternative names include the canonical domain name (CN) of the
   * certificate and additional domain names that can be used to connect to the website.
   */
  subjectAlternativeNames?: GeneralName[];
  /**
   * Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a
   * purpose for which the certificate public key can be used and consists of a name and an object
   * identifier (OID).
   */
  extendedKeyUsages?: ExtendedKeyUsage2[];
  /** The algorithm that was used to generate the public-private key pair. */
  keyAlgorithm?: KeyAlgorithm;
  /**
   * A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies
   * the purpose of the public key contained in the certificate. Possible extension values include
   * DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.
   */
  keyUsages?: KeyUsage2[];
  /** The serial number assigned by the certificate authority. */
  serialNumber?: string;
  /** The time after which the certificate is not valid. */
  notAfter?: Date;
  /** The time before which the certificate is not valid. */
  notBefore?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const x509AttributesSchema: Schema<X509Attributes> = s.object<X509Attributes>(
  {
    issuer: s.optional(s.lazy(() => distinguishedNameSchema)),
    subject: s.optional(s.lazy(() => distinguishedNameSchema)),
    subjectAlternativeNames: s.optional(s.array(s.lazy(() => generalNameSchema))),
    extendedKeyUsages: s.optional(s.array(s.lazy(() => extendedKeyUsage2Schema))),
    keyAlgorithm: s.optional(s.lazy(() => keyAlgorithmSchema)),
    keyUsages: s.optional(s.array(s.lazy(() => keyUsage2Schema))),
    serialNumber: s.optional(s.string()),
    notAfter: s.optional(s.dateTime()),
    notBefore: s.optional(s.dateTime()),
    _keysMap: {
      issuer: "Issuer",
      subject: "Subject",
      subjectAlternativeNames: "SubjectAlternativeNames",
      extendedKeyUsages: "ExtendedKeyUsages",
      keyAlgorithm: "KeyAlgorithm",
      keyUsages: "KeyUsages",
      serialNumber: "SerialNumber",
      notAfter: "NotAfter",
      notBefore: "NotBefore",
    },
  },
  { additionalProperties: s.json() },
);
