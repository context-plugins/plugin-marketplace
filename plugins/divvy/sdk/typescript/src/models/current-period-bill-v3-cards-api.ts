import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CurrentPeriodBillV3CardsApi = {
  /** Card spend limit for the current budget period */
  limit?: number;
  /** Amount spent with the card for the current budget period */
  spent?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const currentPeriodBillV3CardsApiSchema: Schema<CurrentPeriodBillV3CardsApi> =
  s.object<CurrentPeriodBillV3CardsApi>(
    {
      limit: s.optional(s.float64()),
      spent: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
