import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Y = number;

export const ySchema: Schema<Y> = s.of<Y>(s.union([s.int()]));
