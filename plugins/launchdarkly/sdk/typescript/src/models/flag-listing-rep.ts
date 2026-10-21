import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type FlagListingRep = {
  /** The flag name */
  name: string;
  /** The flag key */
  key: string;
  links?: Record<string, Link>;
  site?: Link;
};

export const flagListingRepSchema: Schema<FlagListingRep> = s.object<FlagListingRep>({
  name: s.string(),
  key: s.string(),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  site: s.optional(s.lazy(() => linkSchema)),
  _keysMap: {
    links: "_links",
    site: "_site",
  },
});
