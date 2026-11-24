import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What happens to events that aren't defined in the domain. One of ALLOW_EVENT or BLOCK_EVENT.
 * Optional, defaults to ALLOW_EVENT.
 */
export const OnUndeclaredSchema = {
  AllowEvent: "ALLOW_EVENT",
  BlockEvent: "BLOCK_EVENT",
} as const;
export type OnUndeclaredSchema = (typeof OnUndeclaredSchema)[keyof typeof OnUndeclaredSchema] | (string & {});

export const onUndeclaredSchemaSchema: EnumSchema<OnUndeclaredSchema> =
  s.enumOf<OnUndeclaredSchema>(OnUndeclaredSchema);
