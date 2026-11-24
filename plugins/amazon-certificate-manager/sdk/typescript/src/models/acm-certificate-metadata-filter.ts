import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  certificateKeyPairOrigin1Schema,
  type CertificateKeyPairOrigin1,
} from "./certificate-key-pair-origin1.js";
import { exportOption1Schema, type ExportOption1 } from "./export-option1.js";
import { managedBy1Schema, type ManagedBy1 } from "./managed-by1.js";
import { renewalStatus1Schema, type RenewalStatus1 } from "./renewal-status1.js";
import { status1Schema, type Status1 } from "./status1.js";
import { type1Schema, type Type1 } from "./type1.js";
import { validationMethod1Schema, type ValidationMethod1 } from "./validation-method1.js";

/** Exactly one member is set. */
export type AcmCertificateMetadataFilter = {
  /** Filter by certificate status. */
  status?: Status1;
  /** Filter by certificate renewal status. */
  renewalStatus?: RenewalStatus1;
  /** Filter by certificate type. */
  type?: Type1;
  /** Filter by whether the certificate is in use. */
  inUse?: boolean;
  /** Filter by whether the certificate has been exported. */
  exported?: boolean;
  /** Filter by certificate export option. */
  exportOption?: ExportOption1;
  /** Filter by the entity that manages the certificate. */
  managedBy?: ManagedBy1;
  /** Filter by validation method. */
  validationMethod?: ValidationMethod1;
  /** Filter by certificate key pair origin. */
  certificateKeyPairOrigin?: CertificateKeyPairOrigin1;
  /** Filter by ACME endpoint ARN. */
  acmeEndpointArn?: string;
  /** Filter by ACME account identifier. */
  acmeAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acmCertificateMetadataFilterSchema: Schema<AcmCertificateMetadataFilter> =
  s.object<AcmCertificateMetadataFilter>(
    {
      status: s.optional(s.lazy(() => status1Schema)),
      renewalStatus: s.optional(s.lazy(() => renewalStatus1Schema)),
      type: s.optional(s.lazy(() => type1Schema)),
      inUse: s.optional(s.boolean()),
      exported: s.optional(s.boolean()),
      exportOption: s.optional(s.lazy(() => exportOption1Schema)),
      managedBy: s.optional(s.lazy(() => managedBy1Schema)),
      validationMethod: s.optional(s.lazy(() => validationMethod1Schema)),
      certificateKeyPairOrigin: s.optional(s.lazy(() => certificateKeyPairOrigin1Schema)),
      acmeEndpointArn: s.optional(s.string()),
      acmeAccountId: s.optional(s.string()),
      _keysMap: {
        status: "Status",
        renewalStatus: "RenewalStatus",
        type: "Type",
        inUse: "InUse",
        exported: "Exported",
        exportOption: "ExportOption",
        managedBy: "ManagedBy",
        validationMethod: "ValidationMethod",
        certificateKeyPairOrigin: "CertificateKeyPairOrigin",
        acmeEndpointArn: "AcmeEndpointArn",
        acmeAccountId: "AcmeAccountId",
      },
    },
    { additionalProperties: s.json() },
  );
