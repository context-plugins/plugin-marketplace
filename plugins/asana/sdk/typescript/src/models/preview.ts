import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A collection of rich text that will be displayed as a preview to another app.
 *
 * This is read-only except for a small group of whitelisted apps.
 */
export type Preview = {
  /** Some fallback text to display if unable to display the full preview. */
  fallback?: string;
  /** Text to display in the footer. */
  footer?: string;
  /** Text to display in the header. */
  header?: string;
  /** Where the header will link to. */
  headerLink?: string;
  /** HTML formatted text for the body of the preview. */
  htmlText?: string;
  /** Text for the body of the preview. */
  text?: string;
  /** Text to display as the title. */
  title?: string;
  /** Where to title will link to. */
  titleLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const previewSchema: Schema<Preview> = s.object<Preview>(
  {
    fallback: s.optional(s.string()),
    footer: s.optional(s.string()),
    header: s.optional(s.string()),
    headerLink: s.optional(s.string()),
    htmlText: s.optional(s.string()),
    text: s.optional(s.string()),
    title: s.optional(s.string()),
    titleLink: s.optional(s.string()),
    _keysMap: {
      headerLink: "header_link",
      htmlText: "html_text",
      titleLink: "title_link",
    },
  },
  { additionalProperties: s.json() },
);
