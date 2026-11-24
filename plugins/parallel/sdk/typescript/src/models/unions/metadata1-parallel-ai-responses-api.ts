import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Arbitrary key-value pairs, echoed back on the Response object. Useful for tagging requests. At
 * most 16 keys; keys up to 64 characters, values up to 512 characters.
 */
export type Metadata1ParallelAiResponsesApi = Record<string, string>;

export const metadata1ParallelAiResponsesApiInternalSchema: Schema<Metadata1ParallelAiResponsesApi> =
  s.of<Metadata1ParallelAiResponsesApi>(s.union([s.record(s.string(), s.string())]));

export const metadata1ParallelAiResponsesApiSchema: Schema<Metadata1ParallelAiResponsesApi> = s.lazySchema(
  () =>
    s.of<Metadata1ParallelAiResponsesApi>(
      s.union([s.record(s.string(), s.string()).check(s.maxProperties(16))]),
    ),
);
