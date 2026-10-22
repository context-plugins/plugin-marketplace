import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** optional label assigned to insight folder */
export type Label6 = string;

export const label6Schema: Schema<Label6> = s.of<Label6>(s.union([s.string()]));
