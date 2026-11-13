import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentFormatSchema, type ContentFormat } from "./content-format.js";

export type CreateDoc = {
  /** The title for the new document. */
  title: string;
  /** The content for the new document. */
  content: string;
  /**
   * Default content_format: html. Format of the content being sent. If 'markdown', content will be
   * converted to HTML for storage. Storage is always HTML; this parameter just tells us what format
   * you're sending.
   */
  contentFormat?: ContentFormat;
};

const createDocProperties: s.Shape<CreateDoc> = {
  title: s.string(),
  content: s.string(),
  contentFormat: s.optional(s.lazy(() => contentFormatSchema)),
  _keysMap: {
    contentFormat: "content_format",
  },
};

export const createDocInternalSchema: Schema<CreateDoc> = s.object<CreateDoc>(createDocProperties);

export const createDocSchema: Schema<CreateDoc> = s.lazySchema(() =>
  s.object<CreateDoc>({
    ...createDocProperties,
    title: s.string().check(s.minLength(1), s.maxLength(256)),
  }),
);
