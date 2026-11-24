import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kind1DeliverdDevKnowledgeApiSchema,
  type Kind1DeliverdDevKnowledgeApi,
} from "./kind1-deliverd-dev-knowledge-api.js";

export type ApiV1KnowledgeRequest = {
  /**
   * fact (true here), convention (how we do it), decision (settled, with why), procedure (a how-to
   * note), glossary (what a term means here), contact (who to ask about what) or known_issue (a
   * problem and its workaround)
   */
  kind: Kind1DeliverdDevKnowledgeApi;
  /** The fact or rule in one line, as it should appear in a list */
  title: string;
  /**
   * The detail another agent needs to act on it, written to be read by a person. Never a secret,
   * token or password: those are refused
   */
  body: string;
  /** A few words to find it by */
  tags?: string[];
  /** Keep it inside one workspace; the whole organisation when omitted */
  workspaceId?: string;
  /** Tie it to one project (flow) */
  flowId?: string;
  /**
   * The confirmed entry this would replace. It keeps that entry's scope, and replaces it only once
   * a person confirms it
   */
  supersedesId?: string;
  /** Where this comes from, if it is a page somebody can open */
  sourceUrl?: string;
  /** What the source is, in a few words */
  sourceLabel?: string;
  /** Your own reference. An open entry with the same one is returned instead of a second */
  externalId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1KnowledgeRequestProperties: s.Shape<ApiV1KnowledgeRequest> = {
  kind: kind1DeliverdDevKnowledgeApiSchema,
  title: s.string(),
  body: s.string(),
  tags: s.optional(s.array(s.string())),
  workspaceId: s.optional(s.string()),
  flowId: s.optional(s.string()),
  supersedesId: s.optional(s.string()),
  sourceUrl: s.optional(s.string()),
  sourceLabel: s.optional(s.string()),
  externalId: s.optional(s.string()),
};

export const apiV1KnowledgeRequestInternalSchema: Schema<ApiV1KnowledgeRequest> =
  s.object<ApiV1KnowledgeRequest>(apiV1KnowledgeRequestProperties, { additionalProperties: s.json() });

export const apiV1KnowledgeRequestSchema: Schema<ApiV1KnowledgeRequest> = s.lazySchema(() =>
  s.object<ApiV1KnowledgeRequest>(
    {
      ...apiV1KnowledgeRequestProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      body: s.string().check(s.minLength(1), s.maxLength(8000)),
      tags: s.optional(s.array(s.string().check(s.minLength(1), s.maxLength(40))).check(s.maxLength(20))),
      sourceUrl: s.optional(s.string().check(s.maxLength(2000), s.url())),
      sourceLabel: s.optional(s.string().check(s.maxLength(200))),
      externalId: s.optional(s.string().check(s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
