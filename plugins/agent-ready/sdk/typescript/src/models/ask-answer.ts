import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { askMetaSchema, type AskMeta } from "./ask-meta.js";
import { askResultSchema, type AskResult } from "./ask-result.js";
import { modeSchema, type Mode } from "./mode.js";

/** Successful NLWeb answer. */
export type AskAnswer = {
  /** NLWeb response envelope metadata. */
  meta: AskMeta;
  queryId: string;
  site: string;
  mode: Mode;
  query: string;
  results: AskResult[];
  /** Present when mode is 'summarize'. */
  summary?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const askAnswerSchema: Schema<AskAnswer> = s.object<AskAnswer>(
  {
    meta: askMetaSchema,
    queryId: s.string(),
    site: s.string(),
    mode: modeSchema,
    query: s.string(),
    results: s.array(s.lazy(() => askResultSchema)),
    summary: s.optional(s.string()),
    _keysMap: {
      meta: "_meta",
      queryId: "query_id",
    },
  },
  { additionalProperties: s.json() },
);
