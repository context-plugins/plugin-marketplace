import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { latestValue1Schema, type LatestValue1 } from "./unions/latest-value1.js";

export type Feed = {
  id: string;
  name: string;
  description: string;
  version: number;
  methodologyUrl: string;
  updateIntervalMs: number;
  deviationThresholdBps: number;
  latestValue: LatestValue1;
};

export const feedSchema: Schema<Feed> = s.object<Feed>({
  id: s.string(),
  name: s.string(),
  description: s.string(),
  version: s.int(),
  methodologyUrl: s.string(),
  updateIntervalMs: s.int(),
  deviationThresholdBps: s.int(),
  latestValue: latestValue1Schema,
  _keysMap: {
    methodologyUrl: "methodology_url",
    updateIntervalMs: "update_interval_ms",
    deviationThresholdBps: "deviation_threshold_bps",
    latestValue: "latest_value",
  },
});
