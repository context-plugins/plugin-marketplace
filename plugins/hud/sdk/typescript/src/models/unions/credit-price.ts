import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CreditPrice = number | string;

export const creditPriceInternalSchema: Schema<CreditPrice> = s.of<CreditPrice>(
  s.union([s.float64(), s.string()]),
);

export const creditPriceSchema: Schema<CreditPrice> = s.lazySchema(() =>
  s.of<CreditPrice>(
    s.union([
      s.float64().check(s.gte(0)),
      s
        .string()
        .check(s.pattern("^(?!^[-+.]*$)[+-]?0*(?:\\d{0,10}|(?=[\\d.]{1,13}0*$)\\d{0,10}\\.\\d{0,2}0*$)")),
    ]),
  ),
);
