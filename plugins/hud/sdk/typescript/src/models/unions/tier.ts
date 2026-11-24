import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Tier = string;

export const tierSchema: Schema<Tier> = s.of<Tier>(s.union([s.string()]));
