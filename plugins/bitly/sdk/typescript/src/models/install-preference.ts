import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InstallPreference = {
  NoInstall: "no_install",
  AutoInstall: "auto_install",
  PromoteInstall: "promote_install",
} as const;
export type InstallPreference = (typeof InstallPreference)[keyof typeof InstallPreference] | (string & {});

export const installPreferenceSchema: EnumSchema<InstallPreference> =
  s.enumOf<InstallPreference>(InstallPreference);
