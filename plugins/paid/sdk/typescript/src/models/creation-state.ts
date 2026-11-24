import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreationState = {
  Active: "active",
  Draft: "draft",
} as const;
export type CreationState = (typeof CreationState)[keyof typeof CreationState] | (string & {});

export const creationStateSchema: EnumSchema<CreationState> = s.enumOf<CreationState>(CreationState);
