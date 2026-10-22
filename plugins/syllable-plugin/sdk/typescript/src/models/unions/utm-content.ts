import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UtmContent = string;

export const utmContentSchema: Schema<UtmContent> = s.of<UtmContent>(s.union([s.string()]));
