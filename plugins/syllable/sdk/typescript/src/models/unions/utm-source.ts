import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UtmSource = string;

export const utmSourceSchema: Schema<UtmSource> = s.of<UtmSource>(s.union([s.string()]));
