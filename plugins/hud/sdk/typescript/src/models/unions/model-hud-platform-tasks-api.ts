import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { traceThumbnailModelSchema, type TraceThumbnailModel } from "../trace-thumbnail-model.js";

export type ModelHudPlatformTasksApi = TraceThumbnailModel;

export const modelHudPlatformTasksApiSchema: Schema<ModelHudPlatformTasksApi> =
  s.of<ModelHudPlatformTasksApi>(s.union([s.lazy(() => traceThumbnailModelSchema)]));
