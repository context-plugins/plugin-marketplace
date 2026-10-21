import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Upgrade Receive Only User to Unverified Customer */
export type UpgradeToUnverified = {
  type: string;
};

export const upgradeToUnverifiedSchema: Schema<UpgradeToUnverified> = s.object<UpgradeToUnverified>({
  type: s.string(),
});
