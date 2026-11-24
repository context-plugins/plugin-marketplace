import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import {
  startAudienceSizeJobOutputSchema,
  type StartAudienceSizeJobOutput,
} from "../start-audience-size-job-output.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type ModelsSizeResponse = StartAudienceSizeJobOutput | ValidateErrorJson | InternalServerError;

export const modelsSizeResponseSchema: Schema<ModelsSizeResponse> = s.of<ModelsSizeResponse>(
  s.union([
    s.lazy(() => startAudienceSizeJobOutputSchema),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
