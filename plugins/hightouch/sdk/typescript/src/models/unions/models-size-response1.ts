import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { audienceSizeJobSchema, type AudienceSizeJob } from "../audience-size-job.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type ModelsSizeResponse1 = AudienceSizeJob | ValidateErrorJson | InternalServerError;

export const modelsSizeResponse1Schema: Schema<ModelsSizeResponse1> = s.of<ModelsSizeResponse1>(
  s.union([
    s.lazy(() => audienceSizeJobSchema),
    s.lazy(() => validateErrorJsonSchema),
    s.lazy(() => internalServerErrorSchema),
  ]),
);
