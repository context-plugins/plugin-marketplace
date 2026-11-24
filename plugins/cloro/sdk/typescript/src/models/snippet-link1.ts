import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SnippetLink1 = {
  /** Link text */
  text?: string;
  /** Link URL */
  link?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect. The sibling link field holds
   * the destination cloro resolved it to, or is empty, missing or a `google.com/goto` URL when the
   * link is not resolved yet. In that case, resolve this value with `POST /v1/monitor/google/goto`.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const snippetLink1Properties: s.Shape<SnippetLink1> = {
  text: s.optional(s.string()),
  link: s.optional(s.string()),
  redirectLink: s.optional(s.string()),
};

export const snippetLink1InternalSchema: Schema<SnippetLink1> = s.object<SnippetLink1>(
  snippetLink1Properties,
  { additionalProperties: s.json() },
);

export const snippetLink1Schema: Schema<SnippetLink1> = s.lazySchema(() =>
  s.object<SnippetLink1>(
    {
      ...snippetLink1Properties,
      link: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
