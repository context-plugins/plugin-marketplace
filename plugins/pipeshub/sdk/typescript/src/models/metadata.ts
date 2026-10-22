import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { departmentSchema, type Department } from "./department.js";
import { languageSchema, type Language } from "./language.js";
import { subcategories1Schema, type Subcategories1 } from "./subcategories1.js";
import { topicSchema, type Topic } from "./topic.js";

export type Metadata = {
  languages: Language[];
  topics: Topic[];
  subcategories1: Subcategories1[];
  subcategories2: Subcategories1[];
  subcategories3: Subcategories1[];
  departments: Department[];
  categories: Category[];
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>({
  languages: s.array(s.lazy(() => languageSchema)),
  topics: s.array(s.lazy(() => topicSchema)),
  subcategories1: s.array(s.lazy(() => subcategories1Schema)),
  subcategories2: s.array(s.lazy(() => subcategories1Schema)),
  subcategories3: s.array(s.lazy(() => subcategories1Schema)),
  departments: s.array(s.lazy(() => departmentSchema)),
  categories: s.array(s.lazy(() => categorySchema)),
});
