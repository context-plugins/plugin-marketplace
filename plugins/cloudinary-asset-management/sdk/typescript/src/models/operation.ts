import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operation to perform on the principal’s role assignments. `add` grants the specified roles;
 * `remove` revokes them.
 */
export const Operation = {
  Add: "add",
  Remove: "remove",
} as const;
export type Operation = (typeof Operation)[keyof typeof Operation] | (string & {});

export const operationSchema: EnumSchema<Operation> = s.enumOf<Operation>(Operation);
