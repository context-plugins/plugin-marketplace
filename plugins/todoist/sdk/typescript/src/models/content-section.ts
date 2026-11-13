import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContentSection = {
  /** Opaque section reference, unique within this graph. */
  id: string;
  /** Section name. */
  name: string;
  /** Section description. */
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentSectionProperties: s.Shape<ContentSection> = {
  id: s.string(),
  name: s.string(),
  description: s.optionalNullable(s.string()),
};

export const contentSectionInternalSchema: Schema<ContentSection> = s.object<ContentSection>(
  contentSectionProperties,
  { additionalProperties: s.json() },
);

export const contentSectionSchema: Schema<ContentSection> = s.lazySchema(() =>
  s.object<ContentSection>(
    {
      ...contentSectionProperties,
      id: s.string().check(s.minLength(1), s.maxLength(64)),
      name: s.string().check(s.minLength(1), s.maxLength(2048)),
      description: s.optionalNullable(s.string().check(s.maxLength(16383))),
    },
    { additionalProperties: s.json() },
  ),
);
