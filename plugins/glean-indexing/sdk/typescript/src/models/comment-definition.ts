import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentDefinitionSchema, type ContentDefinition } from "./content-definition.js";
import { userReferenceDefinitionSchema, type UserReferenceDefinition } from "./user-reference-definition.js";

/** Describes a comment on a document */
export type CommentDefinition = {
  /**
   * The document specific id for the comment. This field is case insensitive and should not be more
   * than 200 characters in length.
   */
  id: string;
  /**
   * Describes how a user is referenced in a document. The user can be referenced by email or by a
   * datasource specific id.
   */
  author?: UserReferenceDefinition;
  /** Describes text content or base64 encoded binary content */
  content?: ContentDefinition;
  /** The creation time, in epoch seconds. */
  createdAt?: number;
  /** The last updated time, in epoch seconds. */
  updatedAt?: number;
  /**
   * Describes how a user is referenced in a document. The user can be referenced by email or by a
   * datasource specific id.
   */
  updatedBy?: UserReferenceDefinition;
};

export const commentDefinitionSchema: Schema<CommentDefinition> = s.object<CommentDefinition>({
  id: s.string(),
  author: s.optional(s.lazy(() => userReferenceDefinitionSchema)),
  content: s.optional(s.lazy(() => contentDefinitionSchema)),
  createdAt: s.optional(s.int()),
  updatedAt: s.optional(s.int()),
  updatedBy: s.optional(s.lazy(() => userReferenceDefinitionSchema)),
});
