import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { modelListScopeSchema, type ModelListScope } from "../model-list-scope.js";

/**
 * `catalog` for global base models, `owned` for the team's trainable forks; both when omitted.
 * Signed-out callers must pass `catalog`.
 */
export type ScopeHudPlatformModelsApi = ModelListScope;

export const scopeHudPlatformModelsApiSchema: Schema<ScopeHudPlatformModelsApi> =
  s.of<ScopeHudPlatformModelsApi>(s.union([s.lazy(() => modelListScopeSchema)]));
