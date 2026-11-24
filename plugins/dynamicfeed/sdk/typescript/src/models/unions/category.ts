import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * wildfires | severeStorms | volcanoes | floods | seaLakeIce, ai | dev | infra | platform, language
 * | runtime | framework | database | os | tool
 */
export type Category = string;

export const categorySchema: Schema<Category> = s.of<Category>(s.union([s.string()]));
