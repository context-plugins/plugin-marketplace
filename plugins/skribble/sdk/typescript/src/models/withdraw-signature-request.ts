import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WithdrawSignatureRequest = {
  /** Withdraw message. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const withdrawSignatureRequestProperties: s.Shape<WithdrawSignatureRequest> = {
  message: s.optional(s.string()),
};

export const withdrawSignatureRequestInternalSchema: Schema<WithdrawSignatureRequest> =
  s.object<WithdrawSignatureRequest>(withdrawSignatureRequestProperties, { additionalProperties: s.json() });

export const withdrawSignatureRequestSchema: Schema<WithdrawSignatureRequest> = s.lazySchema(() =>
  s.object<WithdrawSignatureRequest>(
    {
      ...withdrawSignatureRequestProperties,
      message: s.optional(s.string().check(s.minLength(0), s.maxLength(2048))),
    },
    { additionalProperties: s.json() },
  ),
);
