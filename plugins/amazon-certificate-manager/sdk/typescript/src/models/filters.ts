import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportOption3Schema, type ExportOption3 } from "./export-option3.js";
import { extendedKeyUsage2Schema, type ExtendedKeyUsage2 } from "./extended-key-usage2.js";
import { keyTypeSchema, type KeyType } from "./key-type.js";
import { keyUsage2Schema, type KeyUsage2 } from "./key-usage2.js";
import { managedBySchema, type ManagedBy } from "./managed-by.js";

export type Filters = {
  /** Specify one or more ExtendedKeyUsage extension values. */
  extendedKeyUsage?: ExtendedKeyUsage2[];
  /** Specify one or more KeyUsage extension values. */
  keyUsage?: KeyUsage2[];
  /**
   * Specify one or more algorithms that can be used to generate key pairs. Default filtering
   * returns only RSA_1024 and RSA_2048 certificates that have at least one domain. To return other
   * certificate types, provide the desired type signatures in a comma-separated list. For example,
   * "keyTypes": ["RSA_2048","RSA_4096"] returns both RSA_2048 and RSA_4096 certificates.
   */
  keyTypes?: KeyType[];
  /** Specify ENABLED or DISABLED to identify certificates that can be exported. */
  exportOption?: ExportOption3;
  /** Identifies the Amazon Web Services service that manages the certificate issued by ACM. */
  managedBy?: ManagedBy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filtersSchema: Schema<Filters> = s.object<Filters>(
  {
    extendedKeyUsage: s.optional(s.array(s.lazy(() => extendedKeyUsage2Schema))),
    keyUsage: s.optional(s.array(s.lazy(() => keyUsage2Schema))),
    keyTypes: s.optional(s.array(s.lazy(() => keyTypeSchema))),
    exportOption: s.optional(s.lazy(() => exportOption3Schema)),
    managedBy: s.optional(s.lazy(() => managedBySchema)),
  },
  { additionalProperties: s.json() },
);
