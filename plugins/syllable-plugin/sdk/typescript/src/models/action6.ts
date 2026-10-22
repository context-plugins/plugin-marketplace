import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The action to perform on the tool parameter value: `default` means only set the value (using the
 * `format` field) if the parameter doesn't exist or is empty, `override` means always set the
 * value," and `remove` means "remove the parameter value."
 */
export const Action6 = {
  Default: "default",
  Override: "override",
  Remove: "remove",
} as const;
export type Action6 = (typeof Action6)[keyof typeof Action6] | (string & {});

export const action6Schema: EnumSchema<Action6> = s.enumOf<Action6>(Action6);
