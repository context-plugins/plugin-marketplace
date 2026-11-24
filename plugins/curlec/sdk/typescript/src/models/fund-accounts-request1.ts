import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FundAccountsRequest1 = {
  active: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundAccountsRequest1Schema: Schema<FundAccountsRequest1> = s.object<FundAccountsRequest1>(
  {
    active: s.boolean(),
  },
  { additionalProperties: s.json() },
);
