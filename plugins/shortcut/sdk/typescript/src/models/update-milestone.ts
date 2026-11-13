import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createCategoryParamsInternalSchema,
  createCategoryParamsSchema,
  type CreateCategoryParams,
} from "./create-category-params.js";
import { state1Schema, type State1 } from "./state1.js";

export type UpdateMilestone = {
  /** The Milestone's description. */
  description?: string;
  /** A boolean indicating whether the Milestone is archived or not */
  archived?: boolean;
  /** A manual override for the time/date the Milestone was completed. */
  completedAtOverride?: Date | null;
  /** The name of the Milestone. */
  name?: string;
  /** The workflow state that the Milestone is in. */
  state?: State1;
  /** A manual override for the time/date the Milestone was started. */
  startedAtOverride?: Date | null;
  /** An array of IDs of Categories attached to the Milestone. */
  categories?: CreateCategoryParams[];
  /** The ID of the Milestone we want to move this Milestone before. */
  beforeId?: number;
  /** The ID of the Milestone we want to move this Milestone after. */
  afterId?: number;
};

const updateMilestoneProperties: s.Shape<UpdateMilestone> = {
  description: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  completedAtOverride: s.optionalNullable(s.dateTime()),
  name: s.optional(s.string()),
  state: s.optional(s.lazy(() => state1Schema)),
  startedAtOverride: s.optionalNullable(s.dateTime()),
  categories: s.optional(s.array(s.lazy(() => createCategoryParamsInternalSchema))),
  beforeId: s.optional(s.int()),
  afterId: s.optional(s.int()),
  _keysMap: {
    completedAtOverride: "completed_at_override",
    startedAtOverride: "started_at_override",
    beforeId: "before_id",
    afterId: "after_id",
  },
};

export const updateMilestoneInternalSchema: Schema<UpdateMilestone> =
  s.object<UpdateMilestone>(updateMilestoneProperties);

export const updateMilestoneSchema: Schema<UpdateMilestone> = s.lazySchema(() =>
  s.object<UpdateMilestone>({
    ...updateMilestoneProperties,
    description: s.optional(s.string().check(s.maxLength(100000))),
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(256))),
    categories: s.optional(s.array(s.lazy(() => createCategoryParamsSchema))),
  }),
);
