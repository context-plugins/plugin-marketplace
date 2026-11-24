import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Hidden = boolean;

export const hiddenSchema: Schema<Hidden> = s.of<Hidden>(s.union([s.boolean()]));
