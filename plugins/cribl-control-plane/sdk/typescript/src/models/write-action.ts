import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Action to use when writing events. Must be set to `Create` when writing to a data stream. */
export const WriteAction = {
  Index: "index",
  Create: "create",
} as const;
export type WriteAction = (typeof WriteAction)[keyof typeof WriteAction] | (string & {});

export const writeActionSchema: EnumSchema<WriteAction> = s.enumOf<WriteAction>(WriteAction);
