import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ModelHudPlatformUsageApi = string;

export const modelHudPlatformUsageApiSchema: Schema<ModelHudPlatformUsageApi> =
  s.of<ModelHudPlatformUsageApi>(s.union([s.string()]));
