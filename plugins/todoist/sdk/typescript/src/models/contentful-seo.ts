import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContentfulSeo = {
  /** Display title. */
  title: string;
  /** Description. May be null when no description is available. */
  description: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentfulSeoSchema: Schema<ContentfulSeo> = s.object<ContentfulSeo>(
  {
    title: s.string(),
    description: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
