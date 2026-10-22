import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { languageGroupPropertiesSchema, type LanguageGroupProperties } from "../language-group-properties.js";

/** The field whose value should be used to order the results */
export type OrderBy315 = LanguageGroupProperties;

export const orderBy315Schema: Schema<OrderBy315> = s.of<OrderBy315>(
  s.union([s.lazy(() => languageGroupPropertiesSchema)]),
);
