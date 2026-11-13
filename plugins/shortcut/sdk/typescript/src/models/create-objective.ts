import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createCategoryParamsInternalSchema,
  createCategoryParamsSchema,
  type CreateCategoryParams,
} from "./create-category-params.js";
import { state2Schema, type State2 } from "./state2.js";

export type CreateObjective = {
  /** The name of the Objective. */
  name: string;
  /** The Objective's description. */
  description?: string;
  /** The workflow state that the Objective is in. */
  state?: State2;
  /** A manual override for the time/date the Objective was started. */
  startedAtOverride?: Date;
  /** A manual override for the time/date the Objective was completed. */
  completedAtOverride?: Date;
  /** An array of IDs of Categories attached to the Objective. */
  categories?: CreateCategoryParams[];
};

const createObjectiveProperties: s.Shape<CreateObjective> = {
  name: s.string(),
  description: s.optional(s.string()),
  state: s.optional(s.lazy(() => state2Schema)),
  startedAtOverride: s.optional(s.dateTime()),
  completedAtOverride: s.optional(s.dateTime()),
  categories: s.optional(s.array(s.lazy(() => createCategoryParamsInternalSchema))),
  _keysMap: {
    startedAtOverride: "started_at_override",
    completedAtOverride: "completed_at_override",
  },
};

export const createObjectiveInternalSchema: Schema<CreateObjective> =
  s.object<CreateObjective>(createObjectiveProperties);

export const createObjectiveSchema: Schema<CreateObjective> = s.lazySchema(() =>
  s.object<CreateObjective>({
    ...createObjectiveProperties,
    name: s.string().check(s.minLength(1), s.maxLength(256)),
    description: s.optional(s.string().check(s.maxLength(100000))),
    categories: s.optional(s.array(s.lazy(() => createCategoryParamsSchema))),
  }),
);
