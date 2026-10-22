import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Quota usage for a single add-on. */
export type AddonQuota = {
  /** The add-on a quota applies to. @default "image_generation" */
  type?: "image_generation";
  /** Number of generations consumed by this request. */
  usedByRequest: number | null;
  /** Generations remaining in the current period. */
  remaining: number | null;
  /** Maximum generations allowed per period. */
  limit: number | null;
};

export const addonQuotaSchema: Schema<AddonQuota> = s.object<AddonQuota>({
  type: s.defaulted(s.literal("image_generation"), "image_generation"),
  usedByRequest: s.nullable(s.int()),
  remaining: s.nullable(s.int()),
  limit: s.nullable(s.int()),
  _keysMap: {
    usedByRequest: "used_by_request",
  },
});
