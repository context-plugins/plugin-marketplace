import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsRecoverRequest = {
  /** Whether to enable recovery mode. Defaults to true if not specified. */
  recoveryMode?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsRecoverRequestSchema: Schema<DocsRecoverRequest> = s.object<DocsRecoverRequest>(
  {
    recoveryMode: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
