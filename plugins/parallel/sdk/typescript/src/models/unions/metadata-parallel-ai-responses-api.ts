import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MetadataParallelAiResponsesApi = Record<string, string>;

export const metadataParallelAiResponsesApiSchema: Schema<MetadataParallelAiResponsesApi> =
  s.of<MetadataParallelAiResponsesApi>(s.union([s.record(s.string(), s.string())]));
