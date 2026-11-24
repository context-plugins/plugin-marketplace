import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DescriptionHudPlatformTasksetsApi = string;

export const descriptionHudPlatformTasksetsApiInternalSchema: Schema<DescriptionHudPlatformTasksetsApi> =
  s.of<DescriptionHudPlatformTasksetsApi>(s.union([s.string()]));

export const descriptionHudPlatformTasksetsApiSchema: Schema<DescriptionHudPlatformTasksetsApi> =
  s.lazySchema(() =>
    s.of<DescriptionHudPlatformTasksetsApi>(s.union([s.string().check(s.maxLength(10000))])),
  );
