import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flagLinkRepSchema, type FlagLinkRep } from "./flag-link-rep.js";
import { linkSchema, type Link } from "./link.js";

export type FlagLinkCollectionRep = {
  /** An array of flag links */
  items: FlagLinkRep[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const flagLinkCollectionRepSchema: Schema<FlagLinkCollectionRep> = s.object<FlagLinkCollectionRep>({
  items: s.array(s.lazy(() => flagLinkRepSchema)),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    links: "_links",
  },
});
