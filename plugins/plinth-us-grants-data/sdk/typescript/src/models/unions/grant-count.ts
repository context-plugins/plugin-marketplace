import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type GrantCount = number;

export const grantCountSchema: Schema<GrantCount> = s.of<GrantCount>(s.union([s.int()]));
