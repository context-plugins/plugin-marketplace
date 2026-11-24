import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusHudPlatformRolloutsApi = {
  Accepted: "accepted",
  Noop: "noop",
} as const;
export type StatusHudPlatformRolloutsApi =
  | (typeof StatusHudPlatformRolloutsApi)[keyof typeof StatusHudPlatformRolloutsApi]
  | (string & {});

export const statusHudPlatformRolloutsApiSchema: EnumSchema<StatusHudPlatformRolloutsApi> =
  s.enumOf<StatusHudPlatformRolloutsApi>(StatusHudPlatformRolloutsApi);
