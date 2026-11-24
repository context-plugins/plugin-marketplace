import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";

/** A reference to a VCS Commit. */
export type HistoryReferenceCommit = {
  /** The ID of the entity referenced. */
  id: Id;
  /** The type of entity referenced. */
  entityType: string;
  /** The message from the Commit. */
  message: string;
  /** The external URL for the Branch. */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyReferenceCommitProperties: s.Shape<HistoryReferenceCommit> = {
  id: idSchema,
  entityType: s.string(),
  message: s.string(),
  url: s.string(),
  _keysMap: {
    entityType: "entity_type",
  },
};

export const historyReferenceCommitInternalSchema: Schema<HistoryReferenceCommit> =
  s.object<HistoryReferenceCommit>(historyReferenceCommitProperties, { additionalProperties: s.json() });

export const historyReferenceCommitSchema: Schema<HistoryReferenceCommit> = s.lazySchema(() =>
  s.object<HistoryReferenceCommit>(
    {
      ...historyReferenceCommitProperties,
      url: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
