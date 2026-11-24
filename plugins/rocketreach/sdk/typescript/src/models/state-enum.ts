import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StateEnum = {
  Anonymous: "anonymous",
  TestUser: "test_user",
  Registered: "registered",
} as const;
export type StateEnum = (typeof StateEnum)[keyof typeof StateEnum] | (string & {});

export const stateEnumSchema: EnumSchema<StateEnum> = s.enumOf<StateEnum>(StateEnum);
