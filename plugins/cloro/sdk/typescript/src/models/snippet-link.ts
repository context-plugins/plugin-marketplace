import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SnippetLink = {
  /** Link text */
  text?: string;
  /** Link URL */
  link?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const snippetLinkProperties: s.Shape<SnippetLink> = {
  text: s.optional(s.string()),
  link: s.optional(s.string()),
  redirectLink: s.optional(s.string()),
};

export const snippetLinkInternalSchema: Schema<SnippetLink> = s.object<SnippetLink>(snippetLinkProperties, {
  additionalProperties: s.json(),
});

export const snippetLinkSchema: Schema<SnippetLink> = s.lazySchema(() =>
  s.object<SnippetLink>(
    {
      ...snippetLinkProperties,
      link: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
