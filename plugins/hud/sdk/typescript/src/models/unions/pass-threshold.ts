import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PassThreshold = number | string;

export const passThresholdInternalSchema: Schema<PassThreshold> = s.of<PassThreshold>(
  s.union([s.float64(), s.string()]),
);

export const passThresholdSchema: Schema<PassThreshold> = s.lazySchema(() =>
  s.of<PassThreshold>(
    s.union([
      s.float64().check(s.gte(0), s.lte(100)),
      s.string().check(s.pattern("^(?!^[-+.]*$)[+-]?0*\\d*\\.?\\d{0,2}0*$")),
    ]),
  ),
);
