import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  activitiesSignaturesUserInternalSchema,
  activitiesSignaturesUserSchema,
  type ActivitiesSignaturesUser,
} from "./activities-signatures-user.js";
import { signatureLegislationSchema, type SignatureLegislation } from "./signature-legislation.js";
import { signatureQualitySchema, type SignatureQuality } from "./signature-quality.js";

export type ActivitiesSignaturesByBusinessEntry = {
  id?: string;
  /** Action performed on the signature request */
  action?: string;
  timestamp?: Date;
  /** ID of the related signature request */
  signatureRequestId?: string;
  /** Optional cost center */
  costCenter?: string | null;
  initiator?: ActivitiesSignaturesUser;
  signer?: ActivitiesSignaturesUser;
  /**
   * Minimal quality of the signatures for this signature request.
   *
   * | Quality | Description |
   * | --- | --- |
   * | **QES** | Every signer must use QES. This is the **default** quality. Requires a `legislation` parameter. |
   * | **AES_MINIMAL** | Signers will use QES if available, otherwise AES. At least AES is guaranteed. Requires a `legislation` parameter. |
   * | **AES** | Every signer uses AES. |
   * | **SES** | Every signer uses SES. |
   * | **DEMO** | Every signer uses a DEMO signature with **no legal binding**. API demo users (`api_demo_example_*`) get this quality by default. |
   * | **PART11** | Signers use a signature compliant with 21 CFR Part 11 regulations. |
   */
  quality?: SignatureQuality;
  /**
   * Legislation under which the signatures are created. Required when `quality` is `QES` or
   * `AES_MINIMAL`.
   *
   * | Legislation | Description |
   * | --- | --- |
   * | **ZERTES** | QES according to Swiss law. This is the **default**. |
   * | **EIDAS** | QES according to EU law. |
   */
  legislation?: SignatureLegislation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const activitiesSignaturesByBusinessEntryProperties: s.Shape<ActivitiesSignaturesByBusinessEntry> = {
  id: s.optional(s.string()),
  action: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
  signatureRequestId: s.optional(s.string()),
  costCenter: s.optionalNullable(s.string()),
  initiator: s.optional(s.lazy(() => activitiesSignaturesUserInternalSchema)),
  signer: s.optional(s.lazy(() => activitiesSignaturesUserInternalSchema)),
  quality: s.optional(s.lazy(() => signatureQualitySchema)),
  legislation: s.optional(s.lazy(() => signatureLegislationSchema)),
  _keysMap: {
    id: "_id",
    signatureRequestId: "signature_request_id",
    costCenter: "cost_center",
  },
};

export const activitiesSignaturesByBusinessEntryInternalSchema: Schema<ActivitiesSignaturesByBusinessEntry> =
  s.object<ActivitiesSignaturesByBusinessEntry>(activitiesSignaturesByBusinessEntryProperties, {
    additionalProperties: s.json(),
  });

export const activitiesSignaturesByBusinessEntrySchema: Schema<ActivitiesSignaturesByBusinessEntry> =
  s.lazySchema(() =>
    s.object<ActivitiesSignaturesByBusinessEntry>(
      {
        ...activitiesSignaturesByBusinessEntryProperties,
        initiator: s.optional(s.lazy(() => activitiesSignaturesUserSchema)),
        signer: s.optional(s.lazy(() => activitiesSignaturesUserSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
