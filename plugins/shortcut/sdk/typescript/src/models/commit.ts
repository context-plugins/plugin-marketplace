import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identitySchema, type Identity } from "./identity.js";

/** Commit refers to a VCS commit and all associated details. */
export type Commit = {
  /** A string description of this resource. */
  entityType: string;
  /** The ID of the Member that authored the Commit, if known. */
  authorId: string | null;
  /** The Commit hash. */
  hash: string;
  /** The time/date the Commit was updated. */
  updatedAt: Date | null;
  /** The unique ID of the Commit. */
  id: number | null;
  /** The URL of the Commit. */
  url: string;
  /** The email address of the VCS user that authored the Commit. */
  authorEmail: string;
  /** The time/date the Commit was pushed. */
  timestamp: Date;
  /** The Identity of the VCS user that authored the Commit. */
  authorIdentity: Identity;
  /** The ID of the Repository that contains the Commit. */
  repositoryId: number | null;
  /** The time/date the Commit was created. */
  createdAt: Date;
  /** The Commit message. */
  message: string;
};

export const commitSchema: Schema<Commit> = s.object<Commit>({
  entityType: s.string(),
  authorId: s.nullable(s.string()),
  hash: s.string(),
  updatedAt: s.nullable(s.dateTime()),
  id: s.nullable(s.int()),
  url: s.string(),
  authorEmail: s.string(),
  timestamp: s.dateTime(),
  authorIdentity: identitySchema,
  repositoryId: s.nullable(s.int()),
  createdAt: s.dateTime(),
  message: s.string(),
  _keysMap: {
    entityType: "entity_type",
    authorId: "author_id",
    updatedAt: "updated_at",
    authorEmail: "author_email",
    authorIdentity: "author_identity",
    repositoryId: "repository_id",
    createdAt: "created_at",
  },
});
