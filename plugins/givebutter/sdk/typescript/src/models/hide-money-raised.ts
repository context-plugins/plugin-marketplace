import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideMoneyRaised = {
  /** @default "hide_money_raised" */
  name?: "hide_money_raised";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideMoneyRaisedSchema: Schema<HideMoneyRaised> = s.object<HideMoneyRaised>(
  {
    name: s.defaulted(s.literal("hide_money_raised"), "hide_money_raised"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
