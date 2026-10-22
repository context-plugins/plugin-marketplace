import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answerLikesSchema, type AnswerLikes } from "./answer-likes.js";
import { collectionSchema, type Collection } from "./collection.js";
import { documentSchema, type Document } from "./document.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { personSchema, type Person } from "./person.js";
import { sourceTypeSchema, type SourceType } from "./source-type.js";
import { structuredTextSchema, type StructuredText } from "./structured-text.js";
import { documentSpec4Schema, type DocumentSpec4 } from "./unions/document-spec4.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";
import { verificationSchema, type Verification } from "./verification.js";

export type Answer = {
  /** The opaque ID of the Answer. */
  id: number;
  /**
   * Glean Document ID of the Answer. The Glean Document ID is supported for cases where the Answer
   * ID isn't available. If both are available, using the Answer ID is preferred.
   */
  docId?: string;
  question?: string;
  /** Additional ways of phrasing this question. */
  questionVariations?: string[];
  /** The plain text answer to the question. */
  bodyText?: string;
  /**
   * The parent board ID of this Answer, or 0 if it's a floating Answer. Adding Answers to Answer
   * Boards is no longer permitted.
   *
   * @deprecated
   */
  boardId?: number;
  /**
   * Filters which restrict who should see the answer. Values are taken from the corresponding
   * filters in people search.
   */
  audienceFilters?: FacetFilter[];
  /** A list of user roles for the answer added by the owner. */
  addedRoles?: UserRoleSpecification[];
  /** A list of user roles for the answer removed by the owner. */
  removedRoles?: UserRoleSpecification[];
  /** A list of roles for this answer explicitly granted by an owner, editor, or admin. */
  roles?: UserRoleSpecification[];
  sourceDocumentSpec?: DocumentSpec4;
  sourceType?: SourceType;
  permissions?: ObjectPermissions;
  /** An opaque token that represents this particular UGC. To be used for `/feedback` reporting. */
  trackingToken?: string;
  combinedAnswerText?: StructuredText;
  likes?: AnswerLikes;
  author?: Person;
  /** The time the answer was created in ISO format (ISO 8601). */
  createTime?: Date;
  /** The time the answer was last updated in ISO format (ISO 8601). */
  updateTime?: Date;
  updatedBy?: Person;
  verification?: Verification;
  /** The collections to which the answer belongs. */
  collections?: Collection[];
  /** The document's document_category(.proto). */
  documentCategory?: string;
  sourceDocument?: Document;
};

export const answerSchema: Schema<Answer> = s.object<Answer>({
  id: s.int(),
  docId: s.optional(s.string()),
  question: s.optional(s.string()),
  questionVariations: s.optional(s.array(s.string())),
  bodyText: s.optional(s.string()),
  boardId: s.optional(s.int()),
  audienceFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  addedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  removedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  roles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  sourceDocumentSpec: s.optional(s.lazy(() => documentSpec4Schema)),
  sourceType: s.optional(s.lazy(() => sourceTypeSchema)),
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  trackingToken: s.optional(s.string()),
  combinedAnswerText: s.optional(s.lazy(() => structuredTextSchema)),
  likes: s.optional(s.lazy(() => answerLikesSchema)),
  author: s.optional(s.lazy(() => personSchema)),
  createTime: s.optional(s.dateTime()),
  updateTime: s.optional(s.dateTime()),
  updatedBy: s.optional(s.lazy(() => personSchema)),
  verification: s.optional(s.lazy(() => verificationSchema)),
  collections: s.optional(s.array(s.lazy(() => collectionSchema))),
  documentCategory: s.optional(s.string()),
  sourceDocument: s.optional(s.lazy(() => documentSchema)),
});
