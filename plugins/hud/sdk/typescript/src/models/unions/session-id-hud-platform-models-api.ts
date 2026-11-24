import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SessionIdHudPlatformModelsApi = string;

export const sessionIdHudPlatformModelsApiSchema: Schema<SessionIdHudPlatformModelsApi> =
  s.of<SessionIdHudPlatformModelsApi>(s.union([s.string()]));
