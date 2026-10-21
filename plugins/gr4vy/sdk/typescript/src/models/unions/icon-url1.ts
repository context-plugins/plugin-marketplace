import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type IconUrl1 = string;

export const iconUrl1Schema: Schema<IconUrl1> = s.of<IconUrl1>(s.union([s.string()]));
