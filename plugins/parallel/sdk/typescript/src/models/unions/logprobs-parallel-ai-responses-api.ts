import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { logprobSchema, type Logprob } from "../logprob.js";

export type LogprobsParallelAiResponsesApi = Logprob[];

export const logprobsParallelAiResponsesApiSchema: Schema<LogprobsParallelAiResponsesApi> =
  s.of<LogprobsParallelAiResponsesApi>(s.union([s.array(s.lazy(() => logprobSchema))]));
