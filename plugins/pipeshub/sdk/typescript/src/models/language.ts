import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Language = {
  id: string;
  name: string;
};

export const languageSchema: Schema<Language> = s.object<Language>({
  id: s.string(),
  name: s.string(),
});
