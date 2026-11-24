import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueReceiptSyncResponse = {
  id: string;
  status: string;
  publicUrlToken: string;
  publicUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const valueReceiptSyncResponseProperties: s.Shape<ValueReceiptSyncResponse> = {
  id: s.string(),
  status: s.string(),
  publicUrlToken: s.string(),
  publicUrl: s.string(),
};

export const valueReceiptSyncResponseInternalSchema: Schema<ValueReceiptSyncResponse> =
  s.object<ValueReceiptSyncResponse>(valueReceiptSyncResponseProperties, { additionalProperties: s.json() });

export const valueReceiptSyncResponseSchema: Schema<ValueReceiptSyncResponse> = s.lazySchema(() =>
  s.object<ValueReceiptSyncResponse>(
    {
      ...valueReceiptSyncResponseProperties,
      publicUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
