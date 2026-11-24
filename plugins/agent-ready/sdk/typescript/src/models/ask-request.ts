import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contextSchema, type Context } from "./context.js";
import { itemTypeSchema, type ItemType } from "./item-type.js";
import { metaSchema, type Meta } from "./meta.js";
import { mode2Schema, type Mode2 } from "./mode2.js";
import { preferSchema, type Prefer } from "./prefer.js";
import { query2InternalSchema, query2Schema, type Query2 } from "./unions/query2.js";
import { streamingSchema, type Streaming } from "./unions/streaming.js";

/**
 * NLWeb /ask request. The spec shape is `{ query: { text } }`; the legacy string and `{ query: { q
 * } }` forms plus a `prefer` envelope are also accepted.
 */
export type AskRequest = {
  query: Query2;
  mode?: Mode2;
  streaming?: Streaming;
  /** Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything. */
  itemType?: ItemType;
  site?: string;
  queryId?: string;
  prev?: string;
  decontextualizedQuery?: string;
  prefer?: Prefer;
  context?: Context[];
  meta?: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const askRequestProperties: s.Shape<AskRequest> = {
  query: query2InternalSchema,
  mode: s.optional(s.lazy(() => mode2Schema)),
  streaming: s.optional(s.lazy(() => streamingSchema)),
  itemType: s.optional(s.lazy(() => itemTypeSchema)),
  site: s.optional(s.string()),
  queryId: s.optional(s.string()),
  prev: s.optional(s.string()),
  decontextualizedQuery: s.optional(s.string()),
  prefer: s.optional(s.lazy(() => preferSchema)),
  context: s.optional(s.array(s.lazy(() => contextSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
  _keysMap: {
    queryId: "query_id",
    decontextualizedQuery: "decontextualized_query",
  },
};

export const askRequestInternalSchema: Schema<AskRequest> = s.object<AskRequest>(askRequestProperties, {
  additionalProperties: s.json(),
});

export const askRequestSchema: Schema<AskRequest> = s.lazySchema(() =>
  s.object<AskRequest>(
    {
      ...askRequestProperties,
      query: query2Schema,
    },
    { additionalProperties: s.json() },
  ),
);
