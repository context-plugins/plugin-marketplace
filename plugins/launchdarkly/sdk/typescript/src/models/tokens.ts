import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { tokenSchema, type Token } from "./token.js";

export type Tokens = {
  /** An array of access tokens */
  items?: Token[];
  links?: Record<string, Link>;
  /** The number of access tokens returned */
  totalCount?: number;
};

export const tokensSchema: Schema<Tokens> = s.object<Tokens>({
  items: s.optional(s.array(s.lazy(() => tokenSchema))),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  totalCount: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
