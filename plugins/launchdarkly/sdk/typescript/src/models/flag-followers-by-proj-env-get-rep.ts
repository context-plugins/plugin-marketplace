import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { followersPerFlagSchema, type FollowersPerFlag } from "./followers-per-flag.js";
import { linkSchema, type Link } from "./link.js";

export type FlagFollowersByProjEnvGetRep = {
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** An array of flags and their followers */
  items?: FollowersPerFlag[];
};

export const flagFollowersByProjEnvGetRepSchema: Schema<FlagFollowersByProjEnvGetRep> =
  s.object<FlagFollowersByProjEnvGetRep>({
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    items: s.optional(s.array(s.lazy(() => followersPerFlagSchema))),
    _keysMap: {
      links: "_links",
    },
  });
