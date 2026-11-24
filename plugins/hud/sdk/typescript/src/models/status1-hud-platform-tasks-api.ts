import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1HudPlatformTasksApi = {
  Pending: "pending",
  Ready: "ready",
  Verified: "verified",
  Revision: "revision",
  Rejected: "rejected",
} as const;
export type Status1HudPlatformTasksApi =
  | (typeof Status1HudPlatformTasksApi)[keyof typeof Status1HudPlatformTasksApi]
  | (string & {});

export const status1HudPlatformTasksApiSchema: EnumSchema<Status1HudPlatformTasksApi> =
  s.enumOf<Status1HudPlatformTasksApi>(Status1HudPlatformTasksApi);
