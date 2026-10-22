import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CategoryToResultSize = {
  resultSize?: number;
};

export const categoryToResultSizeSchema: Schema<CategoryToResultSize> = s.object<CategoryToResultSize>({
  resultSize: s.optional(s.int()),
});
