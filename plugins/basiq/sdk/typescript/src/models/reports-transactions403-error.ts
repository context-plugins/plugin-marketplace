import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data10Schema, type Data10 } from "./data10.js";

export type ReportsTransactions403Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  data: Data10[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportsTransactions403ErrorSchema: Schema<ReportsTransactions403Error> =
  s.object<ReportsTransactions403Error>(
    {
      type: s.string(),
      correlationId: s.string(),
      data: s.array(s.lazy(() => data10Schema)),
    },
    { additionalProperties: s.json() },
  );
