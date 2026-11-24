import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LockHudPlatformRegistryApi = Record<string, unknown>;

export const lockHudPlatformRegistryApiSchema: Schema<LockHudPlatformRegistryApi> =
  s.of<LockHudPlatformRegistryApi>(s.union([s.record(s.string(), s.unknown())]));
