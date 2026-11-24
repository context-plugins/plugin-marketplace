import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analysis1Schema, type Analysis1 } from "./analysis1.js";
import { transactionSchema, type Transaction } from "./transaction.js";

export type Subgroup = {
  /** Identifier for the subgroup */
  id?: string;
  /** Name of the subgroup */
  name?: string;
  analysis?: Analysis1;
  transactions?: Transaction[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subgroupSchema: Schema<Subgroup> = s.object<Subgroup>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    analysis: s.optional(s.lazy(() => analysis1Schema)),
    transactions: s.optional(s.array(s.lazy(() => transactionSchema))),
  },
  { additionalProperties: s.json() },
);
