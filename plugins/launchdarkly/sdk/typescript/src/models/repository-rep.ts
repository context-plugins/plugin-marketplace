import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { branchRepSchema, type BranchRep } from "./branch-rep.js";
import { type1Schema, type Type1 } from "./type1.js";

export type RepositoryRep = {
  /** The repository name */
  name: string;
  /** A URL to access the repository */
  sourceLink?: string;
  /** A template for constructing a valid URL to view the commit */
  commitUrlTemplate?: string;
  /** A template for constructing a valid URL to view the hunk */
  hunkUrlTemplate?: string;
  /** The type of repository */
  type: Type1;
  /** The repository's default branch */
  defaultBranch: string;
  /** Whether or not a repository is enabled for code reference scanning */
  enabled: boolean;
  /** The version of the repository's saved information */
  version: number;
  /** An array of the repository's branches that have been scanned for code references */
  branches?: BranchRep[];
  links: Record<string, Record<string, unknown>>;
  access?: Access;
};

export const repositoryRepSchema: Schema<RepositoryRep> = s.object<RepositoryRep>({
  name: s.string(),
  sourceLink: s.optional(s.string()),
  commitUrlTemplate: s.optional(s.string()),
  hunkUrlTemplate: s.optional(s.string()),
  type: type1Schema,
  defaultBranch: s.string(),
  enabled: s.boolean(),
  version: s.int(),
  branches: s.optional(s.array(s.lazy(() => branchRepSchema))),
  links: s.record(s.string(), s.record(s.string(), s.unknown())),
  access: s.optional(s.lazy(() => accessSchema)),
  _keysMap: {
    links: "_links",
    access: "_access",
  },
});
