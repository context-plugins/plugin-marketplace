import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MoneyVariable = {
  /** API name of a variable defined in the bot definition. */
  name: string;
  /** Variable type of a money variable storing the currency and amount. @default "money" */
  type?: "money";
  /** Money in format '3_LETTER_CURRENCY_CODE AMOUNT'. */
  value: string | null;
};

export const moneyVariableSchema: Schema<MoneyVariable> = s.object<MoneyVariable>({
  name: s.string(),
  type: s.defaulted(s.literal("money"), "money"),
  value: s.nullable(s.string()),
});
