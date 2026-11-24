import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Upgrade 3 = Renew 5 = ChangePackage */
export const UpgradeType = {
  _1: 1,
  _3: 3,
  _5: 5,
} as const;
export type UpgradeType = (typeof UpgradeType)[keyof typeof UpgradeType] | (number & {});

export const upgradeTypeSchema: EnumSchema<UpgradeType> = s.enumOf<UpgradeType>(UpgradeType);
