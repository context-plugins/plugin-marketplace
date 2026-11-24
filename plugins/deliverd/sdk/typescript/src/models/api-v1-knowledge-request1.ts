import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kindDeliverdDevKnowledgeApiSchema,
  type KindDeliverdDevKnowledgeApi,
} from "./kind-deliverd-dev-knowledge-api.js";

export type ApiV1KnowledgeRequest1 = {
  kind?: KindDeliverdDevKnowledgeApi;
  title?: string;
  body?: string;
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1KnowledgeRequest1Properties: s.Shape<ApiV1KnowledgeRequest1> = {
  kind: s.optional(s.lazy(() => kindDeliverdDevKnowledgeApiSchema)),
  title: s.optional(s.string()),
  body: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
};

export const apiV1KnowledgeRequest1InternalSchema: Schema<ApiV1KnowledgeRequest1> =
  s.object<ApiV1KnowledgeRequest1>(apiV1KnowledgeRequest1Properties, { additionalProperties: s.json() });

export const apiV1KnowledgeRequest1Schema: Schema<ApiV1KnowledgeRequest1> = s.lazySchema(() =>
  s.object<ApiV1KnowledgeRequest1>(
    {
      ...apiV1KnowledgeRequest1Properties,
      title: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
      body: s.optional(s.string().check(s.minLength(1), s.maxLength(8000))),
      tags: s.optional(s.array(s.string().check(s.minLength(1), s.maxLength(40))).check(s.maxLength(20))),
    },
    { additionalProperties: s.json() },
  ),
);
