import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const License = {
  Public: "Public",
  Share: "Share",
  ShareCommercially: "ShareCommercially",
  Modify: "Modify",
  ModifyCommercially: "ModifyCommercially",
} as const;
export type License = (typeof License)[keyof typeof License] | (string & {});

export const licenseSchema: EnumSchema<License> = s.enumOf<License>(License);
