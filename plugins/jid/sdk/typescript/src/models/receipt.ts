import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signatureSchema, type Signature } from "./signature.js";

export type Receipt = {
  receiptId?: string;
  url?: string;
  /**
   * Exactly what was signed: type, version, receipt_id, issued_at, issuer, entity, inputs,
   * decision, rules_version, reasons (code, met, effect, fact_ids, source, verified_at,
   * fresh_until), facts (id, predicate, source, value_sha256, verified_at), terms.
   */
  statement?: Record<string, unknown>;
  signature?: Signature;
  verify?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const receiptSchema: Schema<Receipt> = s.object<Receipt>(
  {
    receiptId: s.optional(s.string()),
    url: s.optional(s.string()),
    statement: s.optional(s.record(s.string(), s.unknown())),
    signature: s.optional(s.lazy(() => signatureSchema)),
    verify: s.optional(s.string()),
    _keysMap: {
      receiptId: "receipt_id",
    },
  },
  { additionalProperties: s.json() },
);
