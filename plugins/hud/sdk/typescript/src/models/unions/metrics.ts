import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Named counts the importer reports, e.g. `tasks_imported`; set with `summary` */
export type Metrics = Record<string, number>;

export const metricsSchema: Schema<Metrics> = s.of<Metrics>(s.union([s.record(s.string(), s.float64())]));
