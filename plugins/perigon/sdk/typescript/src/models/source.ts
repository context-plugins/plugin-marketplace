import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Sources used to populate the field. */
export type Source = {
  /** Perigon article ID of the supporting source, when available. */
  articleId?: string | null;
  /** URL of the supporting source, when available. */
  url?: string | null;
  /** Title of the supporting source, when available. */
  title?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSchema: Schema<Source> = s.object<Source>(
  {
    articleId: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
