import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * JSON a node consumed or produced, bounded in size. Null when the node records nothing of that
 * kind — normal for `input` on any non-action node.
 */
export type CloudflowRunNodePayload = {
  /** The recorded JSON, always an array. Sensitive values are replaced with a redaction marker. */
  value: Record<string, unknown>[];
  /** True when entries were dropped to fit the size cap. */
  truncated?: boolean;
  /** Size of the untruncated payload in bytes. */
  totalBytes?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowRunNodePayloadSchema: Schema<CloudflowRunNodePayload> =
  s.object<CloudflowRunNodePayload>(
    {
      value: s.array(s.record(s.string(), s.unknown())),
      truncated: s.optional(s.boolean()),
      totalBytes: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
