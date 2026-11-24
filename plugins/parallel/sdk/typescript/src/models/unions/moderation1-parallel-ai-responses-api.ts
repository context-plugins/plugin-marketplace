import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { moderationSchema, type Moderation } from "../moderation.js";

export type Moderation1ParallelAiResponsesApi = Moderation;

export const moderation1ParallelAiResponsesApiSchema: Schema<Moderation1ParallelAiResponsesApi> =
  s.of<Moderation1ParallelAiResponsesApi>(s.union([s.lazy(() => moderationSchema)]));
