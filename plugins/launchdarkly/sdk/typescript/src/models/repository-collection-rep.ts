import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { repositoryRepSchema, type RepositoryRep } from "./repository-rep.js";

export type RepositoryCollectionRep = {
  links: Record<string, Link>;
  /** An array of repositories */
  items: RepositoryRep[];
};

export const repositoryCollectionRepSchema: Schema<RepositoryCollectionRep> =
  s.object<RepositoryCollectionRep>({
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    items: s.array(s.lazy(() => repositoryRepSchema)),
    _keysMap: {
      links: "_links",
    },
  });
