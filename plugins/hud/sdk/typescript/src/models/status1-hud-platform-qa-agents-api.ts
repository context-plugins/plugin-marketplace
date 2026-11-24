import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1HudPlatformQaAgentsApi = {
  Added: "added",
  Modified: "modified",
} as const;
export type Status1HudPlatformQaAgentsApi =
  | (typeof Status1HudPlatformQaAgentsApi)[keyof typeof Status1HudPlatformQaAgentsApi]
  | (string & {});

export const status1HudPlatformQaAgentsApiSchema: EnumSchema<Status1HudPlatformQaAgentsApi> =
  s.enumOf<Status1HudPlatformQaAgentsApi>(Status1HudPlatformQaAgentsApi);
