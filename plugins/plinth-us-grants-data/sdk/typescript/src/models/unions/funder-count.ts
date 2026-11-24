import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FunderCount = number;

export const funderCountSchema: Schema<FunderCount> = s.of<FunderCount>(s.union([s.int()]));
