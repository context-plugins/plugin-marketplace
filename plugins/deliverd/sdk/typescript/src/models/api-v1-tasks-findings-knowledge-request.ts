import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kind13Schema, type Kind13 } from "./kind13.js";

export type ApiV1TasksFindingsKnowledgeRequest = {
  /** decision for a decision, fact otherwise, when omitted */
  kind?: Kind13;
  title?: string;
  body?: string;
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksFindingsKnowledgeRequestProperties: s.Shape<ApiV1TasksFindingsKnowledgeRequest> = {
  kind: s.optional(s.lazy(() => kind13Schema)),
  title: s.optional(s.string()),
  body: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
};

export const apiV1TasksFindingsKnowledgeRequestInternalSchema: Schema<ApiV1TasksFindingsKnowledgeRequest> =
  s.object<ApiV1TasksFindingsKnowledgeRequest>(apiV1TasksFindingsKnowledgeRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1TasksFindingsKnowledgeRequestSchema: Schema<ApiV1TasksFindingsKnowledgeRequest> =
  s.lazySchema(() =>
    s.object<ApiV1TasksFindingsKnowledgeRequest>(
      {
        ...apiV1TasksFindingsKnowledgeRequestProperties,
        title: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
        body: s.optional(s.string().check(s.minLength(1), s.maxLength(8000))),
        tags: s.optional(s.array(s.string().check(s.minLength(1), s.maxLength(40))).check(s.maxLength(20))),
      },
      { additionalProperties: s.json() },
    ),
  );
