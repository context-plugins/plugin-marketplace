import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  lockHudPlatformRegistryApiSchema,
  type LockHudPlatformRegistryApi,
} from "./unions/lock-hud-platform-registry-api.js";
import {
  manifestHudPlatformRegistryApiSchema,
  type ManifestHudPlatformRegistryApi,
} from "./unions/manifest-hud-platform-registry-api.js";
import { versionSchema, type Version } from "./unions/version.js";

/** Projection of `builds` returned alongside a registry. */
export type LatestBuildSummary = {
  id: string;
  status: string;
  sdkGeneration: string;
  version?: Version;
  manifest?: ManifestHudPlatformRegistryApi;
  lock?: LockHudPlatformRegistryApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const latestBuildSummarySchema: Schema<LatestBuildSummary> = s.object<LatestBuildSummary>(
  {
    id: s.string(),
    status: s.string(),
    sdkGeneration: s.string(),
    version: s.optional(s.lazy(() => versionSchema)),
    manifest: s.optional(s.lazy(() => manifestHudPlatformRegistryApiSchema)),
    lock: s.optional(s.lazy(() => lockHudPlatformRegistryApiSchema)),
    _keysMap: {
      sdkGeneration: "sdk_generation",
    },
  },
  { additionalProperties: s.json() },
);
