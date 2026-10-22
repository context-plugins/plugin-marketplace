import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A comma-separated list of tag names, or an array of tag names. */
export type TagsParam = string | string[];

export const tagsParamSchema: Schema<TagsParam> = s.of<TagsParam>(s.union([s.string(), s.array(s.string())]));
