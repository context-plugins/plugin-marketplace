import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flagListingRepSchema, type FlagListingRep } from "./flag-listing-rep.js";
import { linkSchema, type Link } from "./link.js";

export type ApplicationFlagCollectionRep = {
  /** A list of the flags that have been evaluated by the application */
  items?: FlagListingRep[];
  /** The number of flags that have been evaluated by the application */
  totalCount?: number;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const applicationFlagCollectionRepSchema: Schema<ApplicationFlagCollectionRep> =
  s.object<ApplicationFlagCollectionRep>({
    items: s.optional(s.array(s.lazy(() => flagListingRepSchema))),
    totalCount: s.optional(s.int()),
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    _keysMap: {
      links: "_links",
    },
  });
