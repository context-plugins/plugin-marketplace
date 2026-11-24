import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SlugHudPlatformRolloutsApi = string;

export const slugHudPlatformRolloutsApiInternalSchema: Schema<SlugHudPlatformRolloutsApi> =
  s.of<SlugHudPlatformRolloutsApi>(s.union([s.string()]));

export const slugHudPlatformRolloutsApiSchema: Schema<SlugHudPlatformRolloutsApi> = s.lazySchema(() =>
  s.of<SlugHudPlatformRolloutsApi>(s.union([s.string().check(s.minLength(1))])),
);
