import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates whether the sample value is healthy. */
export type Healthy = boolean;

export const healthySchema: Schema<Healthy> = s.of<Healthy>(s.union([s.boolean()]));
