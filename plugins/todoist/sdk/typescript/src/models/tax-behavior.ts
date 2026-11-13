import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Tax behavior for the plan price. */
export const TaxBehavior = {
  Exclusive: "exclusive",
  Inclusive: "inclusive",
  Unspecified: "unspecified",
} as const;
export type TaxBehavior = (typeof TaxBehavior)[keyof typeof TaxBehavior] | (string & {});

export const taxBehaviorSchema: EnumSchema<TaxBehavior> = s.enumOf<TaxBehavior>(TaxBehavior);
