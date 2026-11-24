import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import {
  listMatchBoosterRunsOutputSchema,
  type ListMatchBoosterRunsOutput,
} from "../list-match-booster-runs-output.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type ModelsMatchBoosterRunsResponse =
  | ListMatchBoosterRunsOutput
  | ValidateErrorJson
  | InternalServerError;

export const modelsMatchBoosterRunsResponseSchema: Schema<ModelsMatchBoosterRunsResponse> =
  s.of<ModelsMatchBoosterRunsResponse>(
    s.union([
      s.lazy(() => listMatchBoosterRunsOutputSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
