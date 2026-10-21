import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationVersionRepSchema, type ApplicationVersionRep } from "./application-version-rep.js";
import { linkSchema, type Link } from "./link.js";

export type ApplicationVersionsCollectionRep = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** A list of the versions for this application */
  items?: ApplicationVersionRep[];
  /** The number of versions for this application */
  totalCount?: number;
};

export const applicationVersionsCollectionRepSchema: Schema<ApplicationVersionsCollectionRep> =
  s.object<ApplicationVersionsCollectionRep>({
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    items: s.optional(s.array(s.lazy(() => applicationVersionRepSchema))),
    totalCount: s.optional(s.int()),
    _keysMap: {
      links: "_links",
    },
  });
