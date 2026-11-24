import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Number of sources read in processing the task. */
export type NumSourcesRead = number;

export const numSourcesReadSchema: Schema<NumSourcesRead> = s.of<NumSourcesRead>(s.union([s.int()]));
