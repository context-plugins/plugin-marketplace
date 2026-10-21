import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** URL to the card scheme's icon. Null when the scheme has no icon. */
export type IconUrl = string;

export const iconUrlSchema: Schema<IconUrl> = s.of<IconUrl>(s.union([s.string()]));
