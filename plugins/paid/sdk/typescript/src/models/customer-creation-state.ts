import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerCreationState = {
  Draft: "draft",
  Active: "active",
} as const;
export type CustomerCreationState =
  | (typeof CustomerCreationState)[keyof typeof CustomerCreationState]
  | (string & {});

export const customerCreationStateSchema: EnumSchema<CustomerCreationState> =
  s.enumOf<CustomerCreationState>(CustomerCreationState);
