import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomersGetParametersCreationState = {
  Draft: "draft",
  Active: "active",
} as const;
export type CustomersGetParametersCreationState =
  | (typeof CustomersGetParametersCreationState)[keyof typeof CustomersGetParametersCreationState]
  | (string & {});

export const customersGetParametersCreationStateSchema: EnumSchema<CustomersGetParametersCreationState> =
  s.enumOf<CustomersGetParametersCreationState>(CustomersGetParametersCreationState);
