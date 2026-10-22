import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The agent label (DEPRECATED - use labels instead.) */
export type Label = string;

export const labelSchema: Schema<Label> = s.of<Label>(s.union([s.string()]));
