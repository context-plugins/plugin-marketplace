import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The contextual-metadata operation to apply.
 *
 * - `add` merges the given key-value pairs into each asset's existing context. Keys already present
 *   are overwritten; keys not mentioned are left intact. `context` is required.
 * - `remove_all` clears all contextual metadata. The `context` field is ignored.
 */
export const Command1 = {
  Add: "add",
  RemoveAll: "remove_all",
} as const;
export type Command1 = (typeof Command1)[keyof typeof Command1] | (string & {});

export const command1Schema: EnumSchema<Command1> = s.enumOf<Command1>(Command1);
