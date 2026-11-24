import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entity2Schema, type Entity2 } from "./entity2.js";
import { status1Schema, type Status1 } from "./status1.js";

export type InstantSettlementPayout = {
  id?: string;
  entity?: Entity2;
  initiatedAt?: number;
  processedAt?: number;
  reversedAt?: number;
  amount?: number;
  amountSettled?: number;
  fees?: number;
  tax?: number;
  utr?: string;
  status?: Status1;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instantSettlementPayoutSchema: Schema<InstantSettlementPayout> =
  s.object<InstantSettlementPayout>(
    {
      id: s.optional(s.string()),
      entity: s.optional(s.lazy(() => entity2Schema)),
      initiatedAt: s.optional(s.int()),
      processedAt: s.optional(s.int()),
      reversedAt: s.optional(s.int()),
      amount: s.optional(s.int()),
      amountSettled: s.optional(s.int()),
      fees: s.optional(s.int()),
      tax: s.optional(s.int()),
      utr: s.optional(s.string()),
      status: s.optional(s.lazy(() => status1Schema)),
      createdAt: s.optional(s.int()),
      _keysMap: {
        initiatedAt: "initiated_at",
        processedAt: "processed_at",
        reversedAt: "reversed_at",
        amountSettled: "amount_settled",
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
