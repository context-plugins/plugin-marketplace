import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { languageCodeSchema, type LanguageCode } from "../language-code.js";

/** Optional language code for test */
export type LanguageCode2 = LanguageCode;

export const languageCode2Schema: Schema<LanguageCode2> = s.of<LanguageCode2>(
  s.union([s.lazy(() => languageCodeSchema)]),
);
