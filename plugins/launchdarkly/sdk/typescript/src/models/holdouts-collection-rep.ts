import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { simpleHoldoutRepSchema, type SimpleHoldoutRep } from "./simple-holdout-rep.js";

export type HoldoutsCollectionRep = {
  items?: SimpleHoldoutRep[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  /** The total number of holdouts in this project and environment. */
  totalCount?: number;
};

export const holdoutsCollectionRepSchema: Schema<HoldoutsCollectionRep> = s.object<HoldoutsCollectionRep>({
  items: s.optional(s.array(s.lazy(() => simpleHoldoutRepSchema))),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  totalCount: s.optional(s.int()),
  _keysMap: {
    links: "_links",
    totalCount: "total_count",
  },
});
