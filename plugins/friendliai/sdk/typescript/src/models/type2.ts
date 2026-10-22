import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Tool-calling mode. `auto` lets the model decide, `any` requires at least one tool call, `tool`
 * forces a named tool, and `none` disables tool calls.
 */
export const Type2 = {
  Auto: "auto",
  Any: "any",
  Tool: "tool",
  None: "none",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
