import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AmountUsd = number | string;

export const amountUsdInternalSchema: Schema<AmountUsd> = s.of<AmountUsd>(s.union([s.float64(), s.string()]));

export const amountUsdSchema: Schema<AmountUsd> = s.lazySchema(() =>
  s.of<AmountUsd>(
    s.union([
      s.float64().check(s.gt(0), s.lte(1000000)),
      s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d*$")),
    ]),
  ),
);
