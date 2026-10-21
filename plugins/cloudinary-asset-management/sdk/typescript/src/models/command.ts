import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The tag operation to apply.
 *
 * - `add` adds the given tags, leaving existing tags untouched.
 * - `remove` removes the given tags, leaving other tags untouched.
 * - `replace` overwrites the full tag list with the given tags.
 * - `remove_all` clears every tag. The `tags` field is ignored.
 */
export const Command = {
  Add: "add",
  Remove: "remove",
  Replace: "replace",
  RemoveAll: "remove_all",
} as const;
export type Command = (typeof Command)[keyof typeof Command] | (string & {});

export const commandSchema: EnumSchema<Command> = s.enumOf<Command>(Command);
