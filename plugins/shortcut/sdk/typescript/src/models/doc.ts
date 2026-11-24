import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Doc = {
  /** The public id of the Doc */
  id: string;
  /** The Doc's title */
  title: string | null;
  /** The Doc's content in Markdown format (converted from HTML storage). */
  contentMarkdown: string | null;
  /**
   * The Doc's content in HTML format (as stored in S3). Only included when include_html=true query
   * parameter is provided.
   */
  contentHtml?: string | null;
  /** The Shortcut application url for the Doc */
  appUrl: string;
  /** The time/date the Doc was created */
  createdAt: Date;
  /** The time/date the Doc was last updated */
  updatedAt: Date;
  /** Whether the Doc is archived */
  archived: boolean;
};

export const docSchema: Schema<Doc> = s.object<Doc>({
  id: s.string(),
  title: s.nullable(s.string()),
  contentMarkdown: s.nullable(s.string()),
  contentHtml: s.optionalNullable(s.string()),
  appUrl: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  archived: s.boolean(),
  _keysMap: {
    contentMarkdown: "content_markdown",
    contentHtml: "content_html",
    appUrl: "app_url",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
