import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScopeHudPlatformChecksApi = {
  Asset: "asset",
  Task: "task",
} as const;
export type ScopeHudPlatformChecksApi =
  | (typeof ScopeHudPlatformChecksApi)[keyof typeof ScopeHudPlatformChecksApi]
  | (string & {});

export const scopeHudPlatformChecksApiSchema: EnumSchema<ScopeHudPlatformChecksApi> =
  s.enumOf<ScopeHudPlatformChecksApi>(ScopeHudPlatformChecksApi);
