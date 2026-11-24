import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field specifies author that led to the creation of the record. It can take one of the
 * following values:
 *   - `customer`: Indicates that the action was initiated by a customer;
 *   - `merchant`: Indicates that the action was initiated by a merchant;
 *   - `tabby-support`: Indicates that the action was initiated by Tabby support.
 */
export const Source = {
  Customer: "customer",
  Merchant: "merchant",
  TabbySupport: "tabby-support",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
