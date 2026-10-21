import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addonQuotaSchema, type AddonQuota } from "./addon-quota.js";

/** Rate limit information for the account's add-on quotas. */
export type Limits = {
  /** Per-add-on quota usage for this account. */
  addonsQuota?: AddonQuota[];
};

export const limitsSchema: Schema<Limits> = s.object<Limits>({
  addonsQuota: s.optional(s.array(s.lazy(() => addonQuotaSchema))),
  _keysMap: {
    addonsQuota: "addons_quota",
  },
});
