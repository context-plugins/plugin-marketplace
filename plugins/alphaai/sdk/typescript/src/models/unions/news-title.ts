import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Article title frozen at the context cutoff. */
export type NewsTitle = string;

export const newsTitleSchema: Schema<NewsTitle> = s.of<NewsTitle>(s.union([s.string()]));
