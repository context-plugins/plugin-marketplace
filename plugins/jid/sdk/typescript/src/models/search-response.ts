import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";
import { websiteDeclaredSchema, type WebsiteDeclared } from "./website-declared.js";

export type SearchResponse = {
  query?: string;
  results?: Result[];
  /**
   * Businesses with no Jid file whose own website names them (tier website_declared). Not files and
   * not confirmed by an official register.
   */
  websiteDeclared?: WebsiteDeclared[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchResponseSchema: Schema<SearchResponse> = s.object<SearchResponse>(
  {
    query: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => resultSchema))),
    websiteDeclared: s.optional(s.array(s.lazy(() => websiteDeclaredSchema))),
    _keysMap: {
      websiteDeclared: "website_declared",
    },
  },
  { additionalProperties: s.json() },
);
