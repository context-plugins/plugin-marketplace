import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpgradePackageUrls = {
  /** URL of the hash file used to verify the package download. */
  packageHashUrl?: string;
  /** URL of the upgrade package file. */
  packageUrl: string;
};

export const upgradePackageUrlsSchema: Schema<UpgradePackageUrls> = s.object<UpgradePackageUrls>({
  packageHashUrl: s.optional(s.string()),
  packageUrl: s.string(),
});
