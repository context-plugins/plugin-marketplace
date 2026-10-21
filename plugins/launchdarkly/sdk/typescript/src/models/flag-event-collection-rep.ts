import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flagEventRepSchema, type FlagEventRep } from "./flag-event-rep.js";
import { linkSchema, type Link } from "./link.js";

export type FlagEventCollectionRep = {
  /** The total number of flag events */
  totalCount: number;
  /** A list of flag events */
  items: FlagEventRep[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const flagEventCollectionRepSchema: Schema<FlagEventCollectionRep> = s.object<FlagEventCollectionRep>({
  totalCount: s.int(),
  items: s.array(s.lazy(() => flagEventRepSchema)),
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
