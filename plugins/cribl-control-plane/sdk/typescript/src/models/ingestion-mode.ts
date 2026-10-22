import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Ingestion mode */
export const IngestionMode = {
  Batching: "batching",
  Streaming: "streaming",
} as const;
export type IngestionMode = (typeof IngestionMode)[keyof typeof IngestionMode] | (string & {});

export const ingestionModeSchema: EnumSchema<IngestionMode> = s.enumOf<IngestionMode>(IngestionMode);
