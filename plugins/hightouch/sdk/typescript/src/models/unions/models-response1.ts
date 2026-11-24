import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { modelSchema, type Model } from "../model.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type ModelsResponse1 = Model | ValidateErrorJson | InternalServerError;

export const modelsResponse1Schema: Schema<ModelsResponse1> = s.of<ModelsResponse1>(
  s.union([
    s.lazy(() => modelSchema),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
