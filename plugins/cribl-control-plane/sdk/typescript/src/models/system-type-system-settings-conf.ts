import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  upgradeOptionsSystemSettingsConfSystemSchema,
  type UpgradeOptionsSystemSettingsConfSystem,
} from "./upgrade-options-system-settings-conf-system.js";

/** System-level operational settings for the Cribl instance. */
export type SystemTypeSystemSettingsConf = {
  /**
   * If <code>true</code>, enable Intercom integration for in-product messaging. Otherwise,
   * <code>false</code>.
   */
  intercom: boolean;
  /**
   * Upgrade permission policy: <code>api</code> to allow upgrades from the UI or API or
   * <code>false</code> to disable.
   */
  upgrade: UpgradeOptionsSystemSettingsConfSystem;
};

export const systemTypeSystemSettingsConfSchema: Schema<SystemTypeSystemSettingsConf> =
  s.object<SystemTypeSystemSettingsConf>({
    intercom: s.boolean(),
    upgrade: upgradeOptionsSystemSettingsConfSystemSchema,
  });
