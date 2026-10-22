import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Label for campaign (DEPRECATED - use labels instead) */
export type Label9 = string;

export const label9Schema: Schema<Label9> = s.of<Label9>(s.union([s.string()]));
