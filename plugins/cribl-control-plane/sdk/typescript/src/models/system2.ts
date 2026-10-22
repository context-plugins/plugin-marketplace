import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  upgradeOptionsSystemSettingsConfSystemSchema,
  type UpgradeOptionsSystemSettingsConfSystem,
} from "./upgrade-options-system-settings-conf-system.js";

/** System-level operational settings for the Cribl instance. */
export type System2 = {
  /**
   * If <code>true</code>, enable Intercom integration for in-product messaging. Otherwise,
   * <code>false</code>.
   */
  intercom?: boolean;
  /**
   * Upgrade permission policy: <code>api</code> to allow upgrades from the UI or API or
   * <code>false</code> to disable.
   */
  upgrade?: UpgradeOptionsSystemSettingsConfSystem;
};

export const system2Schema: Schema<System2> = s.object<System2>({
  intercom: s.optional(s.boolean()),
  upgrade: s.optional(s.lazy(() => upgradeOptionsSystemSettingsConfSystemSchema)),
});
