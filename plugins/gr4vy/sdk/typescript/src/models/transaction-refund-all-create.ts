import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { externalIdentifier36Schema, type ExternalIdentifier36 } from "./unions/external-identifier36.js";
import { reason1Schema, type Reason1 } from "./unions/reason1.js";

export type TransactionRefundAllCreate = {
  /** An optional reason to attach extra context to the refund requests. */
  reason?: Reason1;
  /** An external identifier that can be used to match the refunds against your own records. */
  externalIdentifier?: ExternalIdentifier36;
};

export const transactionRefundAllCreateSchema: Schema<TransactionRefundAllCreate> =
  s.object<TransactionRefundAllCreate>({
    reason: s.optional(s.lazy(() => reason1Schema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier36Schema)),
    _keysMap: {
      externalIdentifier: "external_identifier",
    },
  });
