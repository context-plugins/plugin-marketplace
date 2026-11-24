import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { purchase1Schema, type Purchase1 } from "./purchase1.js";

/** Purchase response object */
export type Purchase = {
  /** Errors that occurred during purchase */
  errors: Record<string, unknown>;
  /** Successfully purchased numbers */
  purchases: Purchase1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const purchaseSchema: Schema<Purchase> = s.object<Purchase>(
  {
    errors: s.record(s.string(), s.unknown()),
    purchases: s.array(s.lazy(() => purchase1Schema)),
  },
  { additionalProperties: s.json() },
);
