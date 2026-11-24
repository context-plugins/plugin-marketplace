import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";
import { resolvedIdSchema, type ResolvedId } from "./unions/resolved-id.js";

export type BulkStatusFailure = {
  input: string;
  resolvedId?: ResolvedId;
  reason: string;
  code: Code;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkStatusFailureSchema: Schema<BulkStatusFailure> = s.object<BulkStatusFailure>(
  {
    input: s.string(),
    resolvedId: s.optional(s.lazy(() => resolvedIdSchema)),
    reason: s.string(),
    code: codeSchema,
    _keysMap: {
      resolvedId: "resolved_id",
    },
  },
  { additionalProperties: s.json() },
);
