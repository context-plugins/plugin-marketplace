import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the resource. The resource is ACTIVE if it produces metrics, events, or logs within
 * an hour, otherwise it is INACTIVE. You pay for the number of active Amazon Web Services resource
 * hours analyzed for each resource. Inactive resources are not charged.
 */
export const State = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
