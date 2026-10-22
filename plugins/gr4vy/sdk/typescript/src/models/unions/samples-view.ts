import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { monitoringSampleSchema, type MonitoringSample } from "../monitoring-sample.js";

/** The requested subset of monitoring metric samples. */
export type SamplesView = MonitoringSample[];

export const samplesViewSchema: Schema<SamplesView> = s.of<SamplesView>(
  s.union([s.array(s.lazy(() => monitoringSampleSchema))]),
);
