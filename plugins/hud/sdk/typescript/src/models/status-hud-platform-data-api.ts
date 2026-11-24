import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusHudPlatformDataApi = {
  Pending: "pending",
  Ready: "ready",
} as const;
export type StatusHudPlatformDataApi =
  | (typeof StatusHudPlatformDataApi)[keyof typeof StatusHudPlatformDataApi]
  | (string & {});

export const statusHudPlatformDataApiSchema: EnumSchema<StatusHudPlatformDataApi> =
  s.enumOf<StatusHudPlatformDataApi>(StatusHudPlatformDataApi);
