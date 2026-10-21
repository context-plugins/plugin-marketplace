import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { type1Schema, type Type1 } from "./type1.js";

export type StatisticRep = {
  /** The repository name */
  name: string;
  /** The type of repository */
  type: Type1;
  /** A URL to access the repository */
  sourceLink: string;
  /** The repository's default branch */
  defaultBranch: string;
  /** Whether or not a repository is enabled for code reference scanning */
  enabled: boolean;
  /** The version of the repository's saved information */
  version: number;
  /** The number of code reference hunks in which the flag appears in this repository */
  hunkCount: number;
  /** The number of files in which the flag appears in this repository */
  fileCount: number;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  latestCommitTime?: number;
};

export const statisticRepSchema: Schema<StatisticRep> = s.object<StatisticRep>({
  name: s.string(),
  type: type1Schema,
  sourceLink: s.string(),
  defaultBranch: s.string(),
  enabled: s.boolean(),
  version: s.int(),
  hunkCount: s.int(),
  fileCount: s.int(),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  latestCommitTime: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
