import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What happens to events that aren't defined in the contract. One of ALLOW_EVENT or BLOCK_EVENT.
 * Optional, defaults to ALLOW_EVENT.
 */
export const OnUndeclaredSchema2 = {
  AllowEvent: "ALLOW_EVENT",
  BlockEvent: "BLOCK_EVENT",
} as const;
export type OnUndeclaredSchema2 =
  | (typeof OnUndeclaredSchema2)[keyof typeof OnUndeclaredSchema2]
  | (string & {});

export const onUndeclaredSchema2Schema: EnumSchema<OnUndeclaredSchema2> =
  s.enumOf<OnUndeclaredSchema2>(OnUndeclaredSchema2);
