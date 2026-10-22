import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type TokenSummary = {
  links?: Record<string, Link>;
  id?: string;
  /** The name of the token */
  name?: string;
  /** The last few characters of the token */
  ending?: string;
  /** Whether this is a service token */
  serviceToken?: boolean;
};

export const tokenSummarySchema: Schema<TokenSummary> = s.object<TokenSummary>({
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  ending: s.optional(s.string()),
  serviceToken: s.optional(s.boolean()),
  _keysMap: {
    links: "_links",
    id: "_id",
  },
});
