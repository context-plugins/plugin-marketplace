import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Machine-readable 402 detail shared by run and browser creation. */
export type ApiKeySpendLimitDetail = {
  /** @default "api_key_monthly_spend_limit_reached" */
  code?: string;
  message: string;
  cap: number;
  spent: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeySpendLimitDetailSchema: Schema<ApiKeySpendLimitDetail> = s.object<ApiKeySpendLimitDetail>(
  {
    code: s.defaulted(s.string(), "api_key_monthly_spend_limit_reached"),
    message: s.string(),
    cap: s.float64(),
    spent: s.float64(),
  },
  { additionalProperties: s.json() },
);
