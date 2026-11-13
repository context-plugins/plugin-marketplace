import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Undefined object
 *
 * The object is used as a default argument in some constructors to differentiate from `None` which
 * usually means in that context "reset the value".
 *
 * - Use the `parts.util.undefined` singleton for the default variable.
 * - Use `is undefined` to see if value is undefined.
 * - For type hints, use `YourType | Undefined`
 *
 * Usage example:
 *
 * ```
 *     from parts.util import Undefined, undefined
 *
 *     def update_item(
 *         id: int,
 *         title: str | Undefined = undefined,
 *         content: str | Undefined = undefined,
 *     ):
 *         pass
 * ```
 */
export const Undefined = {
  _0: 0,
} as const;
export type Undefined = (typeof Undefined)[keyof typeof Undefined] | (number & {});

export const undefinedSchema: EnumSchema<Undefined> = s.enumOf<Undefined>(Undefined);
