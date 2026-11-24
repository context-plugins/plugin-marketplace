import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** `create` publishes a new sync, `update` changes an existing one */
export const Operation = {
  Create: "create",
  Update: "update",
} as const;
export type Operation = (typeof Operation)[keyof typeof Operation] | (string & {});

export const operationSchema: EnumSchema<Operation> = s.enumOf<Operation>(Operation);
