import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { restrictedModelErrorSchema, type RestrictedModelError } from "./restricted-model-error.js";

export type RestrictedModelsResponse = {
  successes: string[];
  errors: RestrictedModelError[];
};

export const restrictedModelsResponseSchema: Schema<RestrictedModelsResponse> =
  s.object<RestrictedModelsResponse>({
    successes: s.array(s.string()),
    errors: s.array(s.lazy(() => restrictedModelErrorSchema)),
  });
