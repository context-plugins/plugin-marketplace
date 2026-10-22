import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { latestValueSchema, type LatestValue } from "../latest-value.js";

export type LatestValue1 = LatestValue;

export const latestValue1Schema: Schema<LatestValue1> = s.of<LatestValue1>(
  s.union([s.lazy(() => latestValueSchema)]),
);
