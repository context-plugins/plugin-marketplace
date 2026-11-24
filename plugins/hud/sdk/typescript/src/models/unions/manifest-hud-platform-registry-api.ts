import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ManifestHudPlatformRegistryApi = Record<string, unknown>;

export const manifestHudPlatformRegistryApiSchema: Schema<ManifestHudPlatformRegistryApi> =
  s.of<ManifestHudPlatformRegistryApi>(s.union([s.record(s.string(), s.unknown())]));
