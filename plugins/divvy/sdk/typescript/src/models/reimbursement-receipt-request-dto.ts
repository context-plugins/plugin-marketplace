import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Add a reimbursement receipt */
export type ReimbursementReceiptRequestDto = {
  /** Uploaded receipt URL */
  url: string;
  /** Receipt file name */
  filename: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reimbursementReceiptRequestDtoProperties: s.Shape<ReimbursementReceiptRequestDto> = {
  url: s.string(),
  filename: s.string(),
};

export const reimbursementReceiptRequestDtoInternalSchema: Schema<ReimbursementReceiptRequestDto> =
  s.object<ReimbursementReceiptRequestDto>(reimbursementReceiptRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const reimbursementReceiptRequestDtoSchema: Schema<ReimbursementReceiptRequestDto> = s.lazySchema(() =>
  s.object<ReimbursementReceiptRequestDto>(
    {
      ...reimbursementReceiptRequestDtoProperties,
      url: s.string().check(s.minLength(1)),
      filename: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
