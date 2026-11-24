import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GoogleGotoRequest = {
  /**
   * The Google redirect link to resolve, as an absolute URL. Must be a `google.com` or
   * `www.google.com` link with a `/goto` or `/url` path — the form shipped as `redirectLink` beside
   * every resolved link on Google Search, Google News, and AI Mode responses.
   */
  url: string;
};

const googleGotoRequestProperties: s.Shape<GoogleGotoRequest> = {
  url: s.string(),
};

export const googleGotoRequestInternalSchema: Schema<GoogleGotoRequest> =
  s.object<GoogleGotoRequest>(googleGotoRequestProperties);

export const googleGotoRequestSchema: Schema<GoogleGotoRequest> = s.lazySchema(() =>
  s.object<GoogleGotoRequest>({
    ...googleGotoRequestProperties,
    url: s.string().check(s.url()),
  }),
);
