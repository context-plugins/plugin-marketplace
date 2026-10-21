import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** URL to the card scheme's icon. */
export type SchemeIconUrl = string;

export const schemeIconUrlSchema: Schema<SchemeIconUrl> = s.of<SchemeIconUrl>(s.union([s.string()]));
