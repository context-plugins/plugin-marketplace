import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ForkOfModelName = string;

export const forkOfModelNameSchema: Schema<ForkOfModelName> = s.of<ForkOfModelName>(s.union([s.string()]));
