import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseErrorModelSchema, type ResponseErrorModel } from "../response-error-model.js";

export type ErrorParallelAiResponsesApi = ResponseErrorModel;

export const errorParallelAiResponsesApiSchema: Schema<ErrorParallelAiResponsesApi> =
  s.of<ErrorParallelAiResponsesApi>(s.union([s.lazy(() => responseErrorModelSchema)]));
