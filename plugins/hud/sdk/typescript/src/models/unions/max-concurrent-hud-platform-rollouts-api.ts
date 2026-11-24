import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxConcurrentHudPlatformRolloutsApi = number;

export const maxConcurrentHudPlatformRolloutsApiInternalSchema: Schema<MaxConcurrentHudPlatformRolloutsApi> =
  s.of<MaxConcurrentHudPlatformRolloutsApi>(s.union([s.int()]));

export const maxConcurrentHudPlatformRolloutsApiSchema: Schema<MaxConcurrentHudPlatformRolloutsApi> =
  s.lazySchema(() => s.of<MaxConcurrentHudPlatformRolloutsApi>(s.union([s.int().check(s.gte(1))])));
