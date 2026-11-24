import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TypeHudPlatformQaAgentsApi = string;

export const typeHudPlatformQaAgentsApiSchema: Schema<TypeHudPlatformQaAgentsApi> =
  s.of<TypeHudPlatformQaAgentsApi>(s.union([s.string()]));
