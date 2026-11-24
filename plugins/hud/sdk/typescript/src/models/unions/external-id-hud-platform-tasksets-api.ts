import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExternalIdHudPlatformTasksetsApi = string;

export const externalIdHudPlatformTasksetsApiSchema: Schema<ExternalIdHudPlatformTasksetsApi> =
  s.of<ExternalIdHudPlatformTasksetsApi>(s.union([s.string()]));
