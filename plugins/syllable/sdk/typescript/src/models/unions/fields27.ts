import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { languageGroupPropertiesSchema, type LanguageGroupProperties } from "../language-group-properties.js";

/** The fields to include in the response */
export type Fields27 = LanguageGroupProperties[];

export const fields27Schema: Schema<Fields27> = s.of<Fields27>(
  s.union([s.array(s.lazy(() => languageGroupPropertiesSchema))]),
);
