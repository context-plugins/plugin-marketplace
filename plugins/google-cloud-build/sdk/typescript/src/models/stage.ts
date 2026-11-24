import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Current step of the installation process. */
export const Stage = {
  StageUnspecified: "STAGE_UNSPECIFIED",
  PendingCreateApp: "PENDING_CREATE_APP",
  PendingUserOauth: "PENDING_USER_OAUTH",
  PendingInstallApp: "PENDING_INSTALL_APP",
  Complete: "COMPLETE",
} as const;
export type Stage = (typeof Stage)[keyof typeof Stage] | (string & {});

export const stageSchema: EnumSchema<Stage> = s.enumOf<Stage>(Stage);
