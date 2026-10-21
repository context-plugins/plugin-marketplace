import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { upgradePackageUrlsSchema, type UpgradePackageUrls } from "./upgrade-package-urls.js";

/** Automatic upgrade scheduling and package source configuration. */
export type UpgradeSettings2 = {
  /**
   * How frequently to check for available upgrades. Value is a duration string such as
   * <code>24h</code>.
   */
  automaticUpgradeCheckPeriod?: string;
  /** If <code>true</code>, automatic upgrades are disabled. Otherwise, <code>false</code>. */
  disableAutomaticUpgrade?: boolean;
  /**
   * If <code>true</code>, enable the legacy upgrade flow for Edge Nodes. Otherwise,
   * <code>false</code>.
   */
  enableLegacyEdgeUpgrade?: boolean;
  /** List of custom package URLs to use for manual upgrades. */
  packageUrls?: UpgradePackageUrls[];
  /**
   * If <code>false</code>, skip TLS certificate validation when downloading upgrade packages.
   * Defaults to <code>true</code> (validate). Set to <code>false</code> only when a trusted
   * TLS-inspecting proxy is in use (insecure).
   */
  rejectUnauthorized?: boolean;
  /**
   * Upgrade source: <code>cribl</code> for official Cribl packages or <code>custom</code> for a
   * custom package URL.
   */
  upgradeSource?: string;
};

export const upgradeSettings2Schema: Schema<UpgradeSettings2> = s.object<UpgradeSettings2>({
  automaticUpgradeCheckPeriod: s.optional(s.string()),
  disableAutomaticUpgrade: s.optional(s.boolean()),
  enableLegacyEdgeUpgrade: s.optional(s.boolean()),
  packageUrls: s.optional(s.array(s.lazy(() => upgradePackageUrlsSchema))),
  rejectUnauthorized: s.optional(s.boolean()),
  upgradeSource: s.optional(s.string()),
});
