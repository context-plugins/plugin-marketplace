import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createCategoryParamsInternalSchema,
  createCategoryParamsSchema,
  type CreateCategoryParams,
} from "./create-category-params.js";
import { state1Schema, type State1 } from "./state1.js";

export type CreateMilestone = {
  /** The name of the Milestone. */
  name: string;
  /** The Milestone's description. */
  description?: string;
  /** The workflow state that the Milestone is in. */
  state?: State1;
  /** A manual override for the time/date the Milestone was started. */
  startedAtOverride?: Date;
  /** A manual override for the time/date the Milestone was completed. */
  completedAtOverride?: Date;
  /** An array of IDs of Categories attached to the Milestone. */
  categories?: CreateCategoryParams[];
};

const createMilestoneProperties: s.Shape<CreateMilestone> = {
  name: s.string(),
  description: s.optional(s.string()),
  state: s.optional(s.lazy(() => state1Schema)),
  startedAtOverride: s.optional(s.dateTime()),
  completedAtOverride: s.optional(s.dateTime()),
  categories: s.optional(s.array(s.lazy(() => createCategoryParamsInternalSchema))),
  _keysMap: {
    startedAtOverride: "started_at_override",
    completedAtOverride: "completed_at_override",
  },
};

export const createMilestoneInternalSchema: Schema<CreateMilestone> =
  s.object<CreateMilestone>(createMilestoneProperties);

export const createMilestoneSchema: Schema<CreateMilestone> = s.lazySchema(() =>
  s.object<CreateMilestone>({
    ...createMilestoneProperties,
    name: s.string().check(s.minLength(1), s.maxLength(256)),
    description: s.optional(s.string().check(s.maxLength(100000))),
    categories: s.optional(s.array(s.lazy(() => createCategoryParamsSchema))),
  }),
);
