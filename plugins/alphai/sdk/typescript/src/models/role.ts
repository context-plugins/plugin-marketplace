import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `independent` counts toward the cluster. `plan_like`: the buyer's fills all share an exact
 * date-and-price pair with another buyer's (an allocation, an ESPP/DRIP lot), match another direct
 * holder's lot at a round price, or the filing itself says the shares were not bought on the open
 * market (then `reason` is set). `unpriced`: no fill carries a price (units, exchanges).
 * `duplicate_of`: the same transaction another reporter already reported; `duplicate_of` names that
 * reporter.
 */
export const Role = {
  Independent: "independent",
  PlanLike: "plan_like",
  Unpriced: "unpriced",
  DuplicateOf: "duplicate_of",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
