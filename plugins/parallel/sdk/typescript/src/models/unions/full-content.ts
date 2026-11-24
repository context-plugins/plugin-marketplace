import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Full content from the URL formatted as markdown, if requested. */
export type FullContent = string;

export const fullContentSchema: Schema<FullContent> = s.of<FullContent>(s.union([s.string()]));
