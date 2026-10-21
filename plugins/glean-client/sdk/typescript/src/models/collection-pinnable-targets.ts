import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** What targets can a Collection be pinned to. */
export const CollectionPinnableTargets = {
  ResourceCard: "RESOURCE_CARD",
  TeamProfilePage: "TEAM_PROFILE_PAGE",
} as const;
export type CollectionPinnableTargets =
  | (typeof CollectionPinnableTargets)[keyof typeof CollectionPinnableTargets]
  | (string & {});

export const collectionPinnableTargetsSchema: EnumSchema<CollectionPinnableTargets> =
  s.enumOf<CollectionPinnableTargets>(CollectionPinnableTargets);
