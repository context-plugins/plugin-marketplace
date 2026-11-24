import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StatusHudPlatformInstancesApi = string;

export const statusHudPlatformInstancesApiSchema: Schema<StatusHudPlatformInstancesApi> =
  s.of<StatusHudPlatformInstancesApi>(s.union([s.string()]));
