import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DTO representing an image from the Spend API. */
export type ReceiptImage = {
  /** Uploaded receipt URL */
  url: string;
  /** Receipt file name */
  filename: string;
  /** BILL-generated UUID for the receipt image */
  uuid: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const receiptImageProperties: s.Shape<ReceiptImage> = {
  url: s.string(),
  filename: s.string(),
  uuid: s.string(),
};

export const receiptImageInternalSchema: Schema<ReceiptImage> = s.object<ReceiptImage>(
  receiptImageProperties,
  { additionalProperties: s.json() },
);

export const receiptImageSchema: Schema<ReceiptImage> = s.lazySchema(() =>
  s.object<ReceiptImage>(
    {
      ...receiptImageProperties,
      url: s.string().check(s.minLength(1)),
      filename: s.string().check(s.minLength(1)),
      uuid: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
