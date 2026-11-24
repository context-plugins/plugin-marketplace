import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  status1ParallelAiResponsesApiSchema,
  type Status1ParallelAiResponsesApi,
} from "../status1-parallel-ai-responses-api.js";

export type Status11ParallelAiResponsesApi = Status1ParallelAiResponsesApi;

export const status11ParallelAiResponsesApiSchema: Schema<Status11ParallelAiResponsesApi> =
  s.of<Status11ParallelAiResponsesApi>(s.union([s.lazy(() => status1ParallelAiResponsesApiSchema)]));
