import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentfulSeoSchema, type ContentfulSeo } from "./contentful-seo.js";

export type ContentfulCategory = {
  /** Category slug. */
  id: string;
  /** Display name. */
  name: string;
  /** Description. May be null when no description is available. */
  description: string | null;
  /** Search engine metadata for the category. */
  seo: ContentfulSeo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentfulCategorySchema: Schema<ContentfulCategory> = s.object<ContentfulCategory>(
  {
    id: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    seo: contentfulSeoSchema,
  },
  { additionalProperties: s.json() },
);
