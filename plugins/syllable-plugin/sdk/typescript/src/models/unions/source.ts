import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Source of the event (either a tool call or an LLM prompt) */
export type Source = string;

export const sourceSchema: Schema<Source> = s.of<Source>(s.union([s.string()]));
