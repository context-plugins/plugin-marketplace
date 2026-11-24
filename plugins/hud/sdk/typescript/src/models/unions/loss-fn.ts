import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LossFn = string;

export const lossFnSchema: Schema<LossFn> = s.of<LossFn>(s.union([s.string()]));
