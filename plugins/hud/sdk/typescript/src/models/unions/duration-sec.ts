import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DurationSec = number;

export const durationSecInternalSchema: Schema<DurationSec> = s.of<DurationSec>(s.union([s.float64()]));

export const durationSecSchema: Schema<DurationSec> = s.lazySchema(() =>
  s.of<DurationSec>(s.union([s.float64().check(s.gte(0))])),
);
