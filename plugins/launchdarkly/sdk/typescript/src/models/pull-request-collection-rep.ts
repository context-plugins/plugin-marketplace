import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { pullRequestRepSchema, type PullRequestRep } from "./pull-request-rep.js";

export type PullRequestCollectionRep = {
  /** The total number of pull requests */
  totalCount: number;
  /** A list of pull requests */
  items: PullRequestRep[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const pullRequestCollectionRepSchema: Schema<PullRequestCollectionRep> =
  s.object<PullRequestCollectionRep>({
    totalCount: s.int(),
    items: s.array(s.lazy(() => pullRequestRepSchema)),
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
