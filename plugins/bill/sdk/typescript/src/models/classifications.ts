import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Classifications = {
  /** BILL-generated ID of the chart of accounts. The value begins with `0ca`. */
  chartOfAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationsSchema: Schema<Classifications> = s.object<Classifications>(
  {
    chartOfAccountId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
