import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update a transaction */
export type UpdateTxRequestDto = {
  /** BILL-generated ID or UUID of the budget linked with the transaction */
  budgetId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateTxRequestDtoSchema: Schema<UpdateTxRequestDto> = s.object<UpdateTxRequestDto>(
  {
    budgetId: s.string(),
  },
  { additionalProperties: s.json() },
);
