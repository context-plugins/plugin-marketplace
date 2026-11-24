import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusHudPlatformQaAgentsApi = {
  Added: "added",
  Modified: "modified",
  Deleted: "deleted",
} as const;
export type StatusHudPlatformQaAgentsApi =
  | (typeof StatusHudPlatformQaAgentsApi)[keyof typeof StatusHudPlatformQaAgentsApi]
  | (string & {});

export const statusHudPlatformQaAgentsApiSchema: EnumSchema<StatusHudPlatformQaAgentsApi> =
  s.enumOf<StatusHudPlatformQaAgentsApi>(StatusHudPlatformQaAgentsApi);
