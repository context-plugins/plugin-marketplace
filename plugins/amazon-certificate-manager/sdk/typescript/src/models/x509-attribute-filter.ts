import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { extendedKeyUsage1Schema, type ExtendedKeyUsage1 } from "./extended-key-usage1.js";
import { keyAlgorithm1Schema, type KeyAlgorithm1 } from "./key-algorithm1.js";
import { keyUsage1Schema, type KeyUsage1 } from "./key-usage1.js";
import {
  subjectAlternativeNameFilterSchema,
  type SubjectAlternativeNameFilter,
} from "./subject-alternative-name-filter.js";
import { subjectFilterSchema, type SubjectFilter } from "./subject-filter.js";
import { timestampRangeSchema, type TimestampRange } from "./timestamp-range.js";

/** Exactly one member is set. */
export type X509AttributeFilter = {
  /** Exactly one member is set. */
  subject?: SubjectFilter;
  /** Exactly one member is set. */
  subjectAlternativeName?: SubjectAlternativeNameFilter;
  /** Filter by extended key usage. */
  extendedKeyUsage?: ExtendedKeyUsage1;
  /** Filter by key usage. */
  keyUsage?: KeyUsage1;
  /** Filter by key algorithm. */
  keyAlgorithm?: KeyAlgorithm1;
  /** Filter by serial number. */
  serialNumber?: string;
  notAfter?: TimestampRange;
  notBefore?: TimestampRange;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const x509AttributeFilterSchema: Schema<X509AttributeFilter> = s.object<X509AttributeFilter>(
  {
    subject: s.optional(s.lazy(() => subjectFilterSchema)),
    subjectAlternativeName: s.optional(s.lazy(() => subjectAlternativeNameFilterSchema)),
    extendedKeyUsage: s.optional(s.lazy(() => extendedKeyUsage1Schema)),
    keyUsage: s.optional(s.lazy(() => keyUsage1Schema)),
    keyAlgorithm: s.optional(s.lazy(() => keyAlgorithm1Schema)),
    serialNumber: s.optional(s.string()),
    notAfter: s.optional(s.lazy(() => timestampRangeSchema)),
    notBefore: s.optional(s.lazy(() => timestampRangeSchema)),
    _keysMap: {
      subject: "Subject",
      subjectAlternativeName: "SubjectAlternativeName",
      extendedKeyUsage: "ExtendedKeyUsage",
      keyUsage: "KeyUsage",
      keyAlgorithm: "KeyAlgorithm",
      serialNumber: "SerialNumber",
      notAfter: "NotAfter",
      notBefore: "NotBefore",
    },
  },
  { additionalProperties: s.json() },
);
