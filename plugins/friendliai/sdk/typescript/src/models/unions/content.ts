import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The content of assistant message. Required unless `tool_calls` is specified. */
export type Content = string;

export const contentSchema: Schema<Content> = s.of<Content>(s.union([s.string()]));
