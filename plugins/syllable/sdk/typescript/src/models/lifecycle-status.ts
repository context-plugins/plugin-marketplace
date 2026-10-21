import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Effective deprecation state of a model, resolved against a reference date. */
export const LifecycleStatus = {
  Active: "active",
  Deprecated: "deprecated",
  Retired: "retired",
} as const;
export type LifecycleStatus = (typeof LifecycleStatus)[keyof typeof LifecycleStatus] | (string & {});

export const lifecycleStatusSchema: EnumSchema<LifecycleStatus> = s.enumOf<LifecycleStatus>(LifecycleStatus);
