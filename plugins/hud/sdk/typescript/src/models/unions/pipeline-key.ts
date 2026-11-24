import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Reserve the file as the input of this data pipeline, which may take a file larger than the data
 * store's per-file limit
 */
export type PipelineKey = string;

export const pipelineKeyInternalSchema: Schema<PipelineKey> = s.of<PipelineKey>(s.union([s.string()]));

export const pipelineKeySchema: Schema<PipelineKey> = s.lazySchema(() =>
  s.of<PipelineKey>(s.union([s.string().check(s.maxLength(100))])),
);
