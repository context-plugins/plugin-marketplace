import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentFormat2Schema, type ContentFormat2 } from "./content-format2.js";

export type UpdateDoc = {
  /** The new title for the document */
  title?: string;
  /** The new content for the document. */
  content?: string;
  /**
   * Default content_format: html. Format of content. For input: specifies format of provided
   * content (defaults to 'html'). For output: controls response format - 'markdown' (default) or
   * 'html' to include HTML content. Because output defaults to markdown, set 'markdown' when
   * editing and writing back content you read from GET.
   */
  contentFormat?: ContentFormat2;
};

const updateDocProperties: s.Shape<UpdateDoc> = {
  title: s.optional(s.string()),
  content: s.optional(s.string()),
  contentFormat: s.optional(s.lazy(() => contentFormat2Schema)),
  _keysMap: {
    contentFormat: "content_format",
  },
};

export const updateDocInternalSchema: Schema<UpdateDoc> = s.object<UpdateDoc>(updateDocProperties);

export const updateDocSchema: Schema<UpdateDoc> = s.lazySchema(() =>
  s.object<UpdateDoc>({
    ...updateDocProperties,
    title: s.optional(s.string().check(s.minLength(1), s.maxLength(256))),
  }),
);
