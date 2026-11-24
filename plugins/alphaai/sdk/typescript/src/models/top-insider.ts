import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TopInsider = {
  name: string;
  /** Officer title from the filing; empty when the filer reports as a director only. */
  title: string;
  transactionCount: number;
  /** Buys minus sells in USD over the window, as a decimal string. */
  netValue?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topInsiderSchema: Schema<TopInsider> = s.object<TopInsider>(
  {
    name: s.string(),
    title: s.string(),
    transactionCount: s.int(),
    netValue: s.optionalNullable(s.string()),
    _keysMap: {
      transactionCount: "transaction_count",
      netValue: "net_value",
    },
  },
  { additionalProperties: s.json() },
);
