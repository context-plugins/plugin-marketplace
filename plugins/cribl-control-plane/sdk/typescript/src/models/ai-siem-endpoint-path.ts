import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Endpoint to send events to. Use /services/collector/event for structured JSON payloads with
 * standard HEC top-level fields. Use /services/collector/raw for unstructured log lines (plain
 * text).
 */
export const AiSiemEndpointPath = {
  ServicesCollectorEvent: "/services/collector/event",
  ServicesCollectorRaw: "/services/collector/raw",
} as const;
export type AiSiemEndpointPath = (typeof AiSiemEndpointPath)[keyof typeof AiSiemEndpointPath] | (string & {});

export const aiSiemEndpointPathSchema: EnumSchema<AiSiemEndpointPath> =
  s.enumOf<AiSiemEndpointPath>(AiSiemEndpointPath);
