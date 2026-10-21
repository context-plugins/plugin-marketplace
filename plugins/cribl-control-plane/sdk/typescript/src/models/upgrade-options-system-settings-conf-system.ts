import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Upgrade permission policy: <code>api</code> to allow upgrades from the UI or API or
 * <code>false</code> to disable.
 */
export const UpgradeOptionsSystemSettingsConfSystem = {
  Api: "api",
  False: "false",
} as const;
export type UpgradeOptionsSystemSettingsConfSystem =
  | (typeof UpgradeOptionsSystemSettingsConfSystem)[keyof typeof UpgradeOptionsSystemSettingsConfSystem]
  | (string & {});

export const upgradeOptionsSystemSettingsConfSystemSchema: EnumSchema<UpgradeOptionsSystemSettingsConfSystem> =
  s.enumOf<UpgradeOptionsSystemSettingsConfSystem>(UpgradeOptionsSystemSettingsConfSystem);
