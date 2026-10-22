import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 639-1 language code associated with the wallet. */
export type Languagecode = string;

export const languagecodeSchema: Schema<Languagecode> = s.of<Languagecode>(s.union([s.string()]));
