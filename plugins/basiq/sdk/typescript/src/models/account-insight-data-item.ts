import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  verificationResult1InternalSchema,
  verificationResult1Schema,
  type VerificationResult1,
} from "./verification-result1.js";
import {
  verificationResult4InternalSchema,
  verificationResult4Schema,
  type VerificationResult4,
} from "./verification-result4.js";

export type AccountInsightDataItem = {
  /** The account identifier being verified */
  accountId: string;
  /** Account number verification result */
  accountNumber?: VerificationResult4;
  /** Account type verification result */
  accountType?: VerificationResult1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountInsightDataItemProperties: s.Shape<AccountInsightDataItem> = {
  accountId: s.string(),
  accountNumber: s.optional(s.lazy(() => verificationResult4InternalSchema)),
  accountType: s.optional(s.lazy(() => verificationResult1InternalSchema)),
};

export const accountInsightDataItemInternalSchema: Schema<AccountInsightDataItem> =
  s.object<AccountInsightDataItem>(accountInsightDataItemProperties, { additionalProperties: s.json() });

export const accountInsightDataItemSchema: Schema<AccountInsightDataItem> = s.lazySchema(() =>
  s.object<AccountInsightDataItem>(
    {
      ...accountInsightDataItemProperties,
      accountNumber: s.optional(s.lazy(() => verificationResult4Schema)),
      accountType: s.optional(s.lazy(() => verificationResult1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
