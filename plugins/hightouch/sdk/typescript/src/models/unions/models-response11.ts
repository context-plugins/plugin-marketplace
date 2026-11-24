import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type ModelsResponse11 = Record<string, unknown> | ValidateErrorJson | InternalServerError;

export const modelsResponse11Schema: Schema<ModelsResponse11> = s.of<ModelsResponse11>(
  s.union([
    s.record(s.string(), s.unknown()),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
