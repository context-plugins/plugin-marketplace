import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Keyword = {
  createdAt?: string;
  id?: string;
  keyword?: string;
  /** @default 0 */
  triggeredCount?: number;
  updatedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keywordSchema: Schema<Keyword> = s.object<Keyword>(
  {
    createdAt: s.optional(s.string()),
    id: s.optional(s.string()),
    keyword: s.optional(s.string()),
    triggeredCount: s.defaulted(s.int(), 0),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      createdAt: "created_at",
      triggeredCount: "triggered_count",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
