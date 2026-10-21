import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata about the response (e.g., latency, token count). */
export type ResponseMetadata = {
  /** Time taken to generate the response in milliseconds. */
  latencyMs?: number;
  /** Number of tokens in the response. */
  tokenCount?: number;
  /** The specific model version used. */
  modelUsed?: string;
};

export const responseMetadataSchema: Schema<ResponseMetadata> = s.object<ResponseMetadata>({
  latencyMs: s.optional(s.int()),
  tokenCount: s.optional(s.int()),
  modelUsed: s.optional(s.string()),
});
