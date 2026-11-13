import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createCategoryParamsInternalSchema,
  createCategoryParamsSchema,
  type CreateCategoryParams,
} from "./create-category-params.js";
import { state2Schema, type State2 } from "./state2.js";

export type UpdateObjective = {
  /** The Objective's description. */
  description?: string;
  /** A boolean indicating whether the Objective is archived or not */
  archived?: boolean;
  /** A manual override for the time/date the Objective was completed. */
  completedAtOverride?: Date | null;
  /** The name of the Objective. */
  name?: string;
  /** The workflow state that the Objective is in. */
  state?: State2;
  /** A manual override for the time/date the Objective was started. */
  startedAtOverride?: Date | null;
  /** An array of IDs of Categories attached to the Objective. */
  categories?: CreateCategoryParams[];
  /** The ID of the Objective we want to move this Objective before. */
  beforeId?: number;
  /** The ID of the Objective we want to move this Objective after. */
  afterId?: number;
};

const updateObjectiveProperties: s.Shape<UpdateObjective> = {
  description: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  completedAtOverride: s.optionalNullable(s.dateTime()),
  name: s.optional(s.string()),
  state: s.optional(s.lazy(() => state2Schema)),
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

export const updateObjectiveInternalSchema: Schema<UpdateObjective> =
  s.object<UpdateObjective>(updateObjectiveProperties);

export const updateObjectiveSchema: Schema<UpdateObjective> = s.lazySchema(() =>
  s.object<UpdateObjective>({
    ...updateObjectiveProperties,
    description: s.optional(s.string().check(s.maxLength(100000))),
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(256))),
    categories: s.optional(s.array(s.lazy(() => createCategoryParamsSchema))),
  }),
);
