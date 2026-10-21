import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { sourceTypeSchema, type SourceType } from "./source-type.js";
import { documentSpec4Schema, type DocumentSpec4 } from "./unions/document-spec4.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

export type AnswerMutableProperties = {
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
};

export const answerMutablePropertiesSchema: Schema<AnswerMutableProperties> =
  s.object<AnswerMutableProperties>({
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
  });
