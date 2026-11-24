import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

export type ReasonJidScreenApi = {
  code?: string;
  kind?: Kind;
  points?: number;
  text?: string;
  source?: string;
  sourceUrl?: string | null;
  checkedAt?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reasonJidScreenApiSchema: Schema<ReasonJidScreenApi> = s.object<ReasonJidScreenApi>(
  {
    code: s.optional(s.string()),
    kind: s.optional(s.lazy(() => kindSchema)),
    points: s.optional(s.float64()),
    text: s.optional(s.string()),
    source: s.optional(s.string()),
    sourceUrl: s.optionalNullable(s.string()),
    checkedAt: s.optionalNullable(s.string()),
    _keysMap: {
      sourceUrl: "source_url",
      checkedAt: "checked_at",
    },
  },
  { additionalProperties: s.json() },
);
