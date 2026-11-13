import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum to indicate when desktop should show workspace modal */
export const DesktopWorkspaceModal = {
  TrialOffer: "TRIAL_OFFER",
} as const;
export type DesktopWorkspaceModal =
  | (typeof DesktopWorkspaceModal)[keyof typeof DesktopWorkspaceModal]
  | (string & {});

export const desktopWorkspaceModalSchema: EnumSchema<DesktopWorkspaceModal> =
  s.enumOf<DesktopWorkspaceModal>(DesktopWorkspaceModal);
