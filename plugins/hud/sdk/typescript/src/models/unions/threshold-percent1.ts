import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ThresholdPercent1 = number | string;

export const thresholdPercent1InternalSchema: Schema<ThresholdPercent1> = s.of<ThresholdPercent1>(
  s.union([s.float64(), s.string()]),
);

export const thresholdPercent1Schema: Schema<ThresholdPercent1> = s.lazySchema(() =>
  s.of<ThresholdPercent1>(
    s.union([
      s.float64().check(s.gt(0), s.lte(100)),
      s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d{0,2}0*$")),
    ]),
  ),
);
