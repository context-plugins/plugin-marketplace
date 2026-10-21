import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectionPinnableCategoriesSchema,
  type CollectionPinnableCategories,
} from "./collection-pinnable-categories.js";
import {
  collectionPinnableTargetsSchema,
  type CollectionPinnableTargets,
} from "./collection-pinnable-targets.js";

export type CollectionPinTarget = {
  /** Categories a Collection can be pinned to. */
  category: CollectionPinnableCategories;
  /**
   * Optional. If category supports values, then the additional value for the category e.g.
   * department name for DEPARTMENT_RESOURCE, team name/id for TEAM_RESOURCE and so on.
   */
  value?: string;
  /** What targets can a Collection be pinned to. */
  target?: CollectionPinnableTargets;
};

export const collectionPinTargetSchema: Schema<CollectionPinTarget> = s.object<CollectionPinTarget>({
  category: collectionPinnableCategoriesSchema,
  value: s.optional(s.string()),
  target: s.optional(s.lazy(() => collectionPinnableTargetsSchema)),
});
