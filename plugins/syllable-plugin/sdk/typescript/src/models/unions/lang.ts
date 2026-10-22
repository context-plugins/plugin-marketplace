import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * ISO 639 code of the language used for the message (may appear as "unset" if was not conclusively
 * determined)
 */
export type Lang = string;

export const langSchema: Schema<Lang> = s.of<Lang>(s.union([s.string()]));
