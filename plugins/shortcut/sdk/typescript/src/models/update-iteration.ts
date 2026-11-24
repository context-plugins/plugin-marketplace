import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createLabelParamsInternalSchema,
  createLabelParamsSchema,
  type CreateLabelParams,
} from "./create-label-params.js";

export type UpdateIteration = {
  /** An array of UUIDs for any Members you want to add as Followers. */
  followerIds?: string[];
  /**
   * An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group
   * association is presented in our web UI.
   */
  groupIds?: string[];
  /** An array of Labels attached to the Iteration. */
  labels?: CreateLabelParams[];
  /** The description of the Iteration. */
  description?: string;
  /** The name of this Iteration */
  name?: string;
  /** The date this Iteration begins, e.g. 2019-07-01 */
  startDate?: string;
  /** The date this Iteration ends, e.g. 2019-07-05. */
  endDate?: string;
};

const updateIterationProperties: s.Shape<UpdateIteration> = {
  followerIds: s.optional(s.array(s.string())),
  groupIds: s.optional(s.array(s.string())),
  labels: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  description: s.optional(s.string()),
  name: s.optional(s.string()),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  _keysMap: {
    followerIds: "follower_ids",
    groupIds: "group_ids",
    startDate: "start_date",
    endDate: "end_date",
  },
};

export const updateIterationInternalSchema: Schema<UpdateIteration> =
  s.object<UpdateIteration>(updateIterationProperties);

export const updateIterationSchema: Schema<UpdateIteration> = s.lazySchema(() =>
  s.object<UpdateIteration>({
    ...updateIterationProperties,
    labels: s.optional(s.array(s.lazy(() => createLabelParamsSchema))),
    description: s.optional(s.string().check(s.maxLength(100000))),
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(256))),
    startDate: s.optional(s.string().check(s.minLength(1))),
    endDate: s.optional(s.string().check(s.minLength(1))),
  }),
);
