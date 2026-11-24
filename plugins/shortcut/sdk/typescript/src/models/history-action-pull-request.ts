import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";

/** An action representing various operations for a Pull Request. */
export type HistoryActionPullRequest = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. */
  action: Action;
  /** The VCS Repository-specific ID for the Pull Request. */
  number: number;
  /** The title of the Pull Request. */
  title: string;
  /** The URL from the provider of the VCS Pull Request. */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyActionPullRequestProperties: s.Shape<HistoryActionPullRequest> = {
  id: s.int(),
  entityType: s.string(),
  action: actionSchema,
  number: s.int(),
  title: s.string(),
  url: s.string(),
  _keysMap: {
    entityType: "entity_type",
  },
};

export const historyActionPullRequestInternalSchema: Schema<HistoryActionPullRequest> =
  s.object<HistoryActionPullRequest>(historyActionPullRequestProperties, { additionalProperties: s.json() });

export const historyActionPullRequestSchema: Schema<HistoryActionPullRequest> = s.lazySchema(() =>
  s.object<HistoryActionPullRequest>(
    {
      ...historyActionPullRequestProperties,
      url: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
