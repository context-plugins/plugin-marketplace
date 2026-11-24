import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  verificationResultInternalSchema,
  verificationResultSchema,
  type VerificationResult,
} from "./verification-result.js";
import {
  verificationResult2InternalSchema,
  verificationResult2Schema,
  type VerificationResult2,
} from "./verification-result2.js";

export type IdentityInsightDataItem = {
  /** Name verification result */
  name?: VerificationResult2;
  /** Array of phone number verification results */
  phones?: VerificationResult[];
  /** Array of email verification results */
  emails?: VerificationResult[];
  /** Array of address verification results */
  addresses?: VerificationResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const identityInsightDataItemProperties: s.Shape<IdentityInsightDataItem> = {
  name: s.optional(s.lazy(() => verificationResult2InternalSchema)),
  phones: s.optional(s.array(s.lazy(() => verificationResultInternalSchema))),
  emails: s.optional(s.array(s.lazy(() => verificationResultInternalSchema))),
  addresses: s.optional(s.array(s.lazy(() => verificationResultInternalSchema))),
};

export const identityInsightDataItemInternalSchema: Schema<IdentityInsightDataItem> =
  s.object<IdentityInsightDataItem>(identityInsightDataItemProperties, { additionalProperties: s.json() });

export const identityInsightDataItemSchema: Schema<IdentityInsightDataItem> = s.lazySchema(() =>
  s.object<IdentityInsightDataItem>(
    {
      ...identityInsightDataItemProperties,
      name: s.optional(s.lazy(() => verificationResult2Schema)),
      phones: s.optional(s.array(s.lazy(() => verificationResultSchema))),
      emails: s.optional(s.array(s.lazy(() => verificationResultSchema))),
      addresses: s.optional(s.array(s.lazy(() => verificationResultSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
