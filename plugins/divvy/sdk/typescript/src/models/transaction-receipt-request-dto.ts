import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Add a transaction receipt */
export type TransactionReceiptRequestDto = {
  /** Uploaded receipt URL */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionReceiptRequestDtoProperties: s.Shape<TransactionReceiptRequestDto> = {
  url: s.string(),
};

export const transactionReceiptRequestDtoInternalSchema: Schema<TransactionReceiptRequestDto> =
  s.object<TransactionReceiptRequestDto>(transactionReceiptRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const transactionReceiptRequestDtoSchema: Schema<TransactionReceiptRequestDto> = s.lazySchema(() =>
  s.object<TransactionReceiptRequestDto>(
    {
      ...transactionReceiptRequestDtoProperties,
      url: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
