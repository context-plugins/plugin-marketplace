import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParallelBeta = {
  McpServer20250717: "mcp-server-2025-07-17",
  EventsSse20250724: "events-sse-2025-07-24",
  Webhook20250812: "webhook-2025-08-12",
  Findall20250915: "findall-2025-09-15",
  SearchExtract20251010: "search-extract-2025-10-10",
  FieldBasis20251125: "field-basis-2025-11-25",
} as const;
export type ParallelBeta = (typeof ParallelBeta)[keyof typeof ParallelBeta] | (string & {});

export const parallelBetaSchema: EnumSchema<ParallelBeta> = s.enumOf<ParallelBeta>(ParallelBeta);
