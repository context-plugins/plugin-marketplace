import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1KnowledgeImportRequest = {
  /**
   * Markdown: a Deliverd export, or a notes file such as AGENTS.md or CLAUDE.md. Each heading
   * becomes one proposed entry
   */
  markdown: string;
  workspaceId?: string;
  /** Where the file came from, e.g. the repository and path */
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1KnowledgeImportRequestProperties: s.Shape<ApiV1KnowledgeImportRequest> = {
  markdown: s.string(),
  workspaceId: s.optional(s.string()),
  source: s.optional(s.string()),
};

export const apiV1KnowledgeImportRequestInternalSchema: Schema<ApiV1KnowledgeImportRequest> =
  s.object<ApiV1KnowledgeImportRequest>(apiV1KnowledgeImportRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1KnowledgeImportRequestSchema: Schema<ApiV1KnowledgeImportRequest> = s.lazySchema(() =>
  s.object<ApiV1KnowledgeImportRequest>(
    {
      ...apiV1KnowledgeImportRequestProperties,
      markdown: s.string().check(s.minLength(1), s.maxLength(1000000)),
      source: s.optional(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
