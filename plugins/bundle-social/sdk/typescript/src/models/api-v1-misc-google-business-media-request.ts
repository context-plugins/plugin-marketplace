import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Category, categorySchema } from "./category.js";

export type ApiV1MiscGoogleBusinessMediaRequest = {
  teamId: string;
  uploadId: string;
  /** @default Category.Additional */
  category?: Category;
  description?: string;
};

const apiV1MiscGoogleBusinessMediaRequestProperties: s.Shape<ApiV1MiscGoogleBusinessMediaRequest> = {
  teamId: s.string(),
  uploadId: s.string(),
  category: s.defaulted(categorySchema, Category.Additional),
  description: s.optional(s.string()),
};

export const apiV1MiscGoogleBusinessMediaRequestInternalSchema: Schema<ApiV1MiscGoogleBusinessMediaRequest> =
  s.object<ApiV1MiscGoogleBusinessMediaRequest>(apiV1MiscGoogleBusinessMediaRequestProperties);

export const apiV1MiscGoogleBusinessMediaRequestSchema: Schema<ApiV1MiscGoogleBusinessMediaRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessMediaRequest>({
      ...apiV1MiscGoogleBusinessMediaRequestProperties,
      description: s.optional(s.string().check(s.maxLength(2000))),
    }),
  );
