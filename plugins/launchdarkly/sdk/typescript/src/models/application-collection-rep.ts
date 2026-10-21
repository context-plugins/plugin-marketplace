import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationRepSchema, type ApplicationRep } from "./application-rep.js";
import { linkSchema, type Link } from "./link.js";

export type ApplicationCollectionRep = {
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** A list of applications */
  items?: ApplicationRep[];
  /** The number of applications */
  totalCount?: number;
};

export const applicationCollectionRepSchema: Schema<ApplicationCollectionRep> =
  s.object<ApplicationCollectionRep>({
    links: s.optional(
      s.record(
        s.string(),
        s.lazy(() => linkSchema),
      ),
    ),
    items: s.optional(s.array(s.lazy(() => applicationRepSchema))),
    totalCount: s.optional(s.int()),
    _keysMap: {
      links: "_links",
    },
  });
