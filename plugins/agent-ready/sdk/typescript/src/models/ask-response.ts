import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { askMetaSchema, type AskMeta } from "./ask-meta.js";
import { askResultSchema, type AskResult } from "./ask-result.js";
import { error2Schema, type Error2 } from "./error2.js";
import { modeSchema, type Mode } from "./mode.js";

/** Either an answer or a failure. */
export type AskResponse = {
  /** NLWeb response envelope metadata. */
  meta?: AskMeta;
  queryId?: string;
  site?: string;
  mode?: Mode;
  query?: string;
  results?: AskResult[];
  /** Present when mode is 'summarize'. */
  summary?: string;
  error?: Error2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const askResponseSchema: Schema<AskResponse> = s.object<AskResponse>(
  {
    meta: s.optional(s.lazy(() => askMetaSchema)),
    queryId: s.optional(s.string()),
    site: s.optional(s.string()),
    mode: s.optional(s.lazy(() => modeSchema)),
    query: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => askResultSchema))),
    summary: s.optional(s.string()),
    error: s.optional(s.lazy(() => error2Schema)),
    _keysMap: {
      meta: "_meta",
      queryId: "query_id",
    },
  },
  { additionalProperties: s.json() },
);
