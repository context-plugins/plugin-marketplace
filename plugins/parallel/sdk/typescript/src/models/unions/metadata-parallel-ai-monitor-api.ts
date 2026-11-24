import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * User-provided metadata stored with the monitor and echoed back in webhook notifications and GET
 * responses, so you can map events to objects in your application. Keys: max 16 chars; values: max
 * 512 chars.
 */
export type MetadataParallelAiMonitorApi = Record<string, string>;

export const metadataParallelAiMonitorApiSchema: Schema<MetadataParallelAiMonitorApi> =
  s.of<MetadataParallelAiMonitorApi>(s.union([s.record(s.string(), s.string())]));
