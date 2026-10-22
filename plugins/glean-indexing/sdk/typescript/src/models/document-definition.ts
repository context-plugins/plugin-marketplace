import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commentDefinitionSchema, type CommentDefinition } from "./comment-definition.js";
import { contentDefinitionSchema, type ContentDefinition } from "./content-definition.js";
import { customPropertySchema, type CustomProperty } from "./custom-property.js";
import {
  documentInteractionsDefinitionSchema,
  type DocumentInteractionsDefinition,
} from "./document-interactions-definition.js";
import {
  documentPermissionsDefinitionSchema,
  type DocumentPermissionsDefinition,
} from "./document-permissions-definition.js";
import { userReferenceDefinitionSchema, type UserReferenceDefinition } from "./user-reference-definition.js";

/** Indexable document structure */
export type DocumentDefinition = {
  /**
   * Document title, in plain text, if present. If not present, the title would be attempted to be
   * extracted from the content.
   */
  title?: string;
  /**
   * Source filename, in plain text, for the document. May be used as a fallback title for the
   * document, if the title is not provided and cannot be extracted from the content. Populate this
   * if there is no explicit title for the document and the content is sourced from a file.
   */
  filename?: string;
  /** The container name for the content (Folder for example for file content). */
  container?: string;
  /** This represents the datasource sepcific id of the container. */
  containerDatasourceId?: string;
  /** This represents the object type of the container. It cannot have spaces or _ */
  containerObjectType?: string;
  datasource: string;
  /**
   * The type of the document (Case, KnowledgeArticle for Salesforce for example). It cannot have
   * spaces or _
   */
  objectType?: string;
  /**
   * The permalink for viewing the document. **Note: viewURL is a required field for non-entity
   * datasources, but not required if the datasource is used to push custom entities (ie.
   * datasources where isEntityDatasource is false).**'
   */
  viewUrl?: string;
  /**
   * The datasource specific id for the document. This field is case insensitive and should not be
   * more than 200 characters in length. Note: id is a required field for datasources created after
   * 1st March 2025
   */
  id?: string;
  /** Describes text content or base64 encoded binary content */
  summary?: ContentDefinition;
  /** Describes text content or base64 encoded binary content */
  body?: ContentDefinition;
  /**
   * Describes how a user is referenced in a document. The user can be referenced by email or by a
   * datasource specific id.
   */
  author?: UserReferenceDefinition;
  /**
   * Describes how a user is referenced in a document. The user can be referenced by email or by a
   * datasource specific id.
   */
  owner?: UserReferenceDefinition;
  /** describes the access control details of the document */
  permissions?: DocumentPermissionsDefinition;
  /** The creation time, in epoch seconds. */
  createdAt?: number;
  /** The last update time, in epoch seconds. */
  updatedAt?: number;
  /**
   * Describes how a user is referenced in a document. The user can be referenced by email or by a
   * datasource specific id.
   */
  updatedBy?: UserReferenceDefinition;
  /** Labels associated with the document. */
  tags?: string[];
  /** describes the interactions on the document */
  interactions?: DocumentInteractionsDefinition;
  status?: string;
  /** Additional variations of the URL that this document points to. */
  additionalUrls?: string[];
  /**
   * A deep link, if available, into the datasource's native application for the user's platform
   * (e.g. slack://channel/message).
   */
  nativeAppUrl?: string;
  /** Comments associated with the document. */
  comments?: CommentDefinition[];
  /**
   * Additional metadata properties of the document. These can surface as [facets and
   * operators](https://developers.glean.com/indexing/datasource/custom-properties/operators_and_facets).
   */
  customProperties?: CustomProperty[];
};

export const documentDefinitionSchema: Schema<DocumentDefinition> = s.object<DocumentDefinition>({
  title: s.optional(s.string()),
  filename: s.optional(s.string()),
  container: s.optional(s.string()),
  containerDatasourceId: s.optional(s.string()),
  containerObjectType: s.optional(s.string()),
  datasource: s.string(),
  objectType: s.optional(s.string()),
  viewUrl: s.optional(s.string()),
  id: s.optional(s.string()),
  summary: s.optional(s.lazy(() => contentDefinitionSchema)),
  body: s.optional(s.lazy(() => contentDefinitionSchema)),
  author: s.optional(s.lazy(() => userReferenceDefinitionSchema)),
  owner: s.optional(s.lazy(() => userReferenceDefinitionSchema)),
  permissions: s.optional(s.lazy(() => documentPermissionsDefinitionSchema)),
  createdAt: s.optional(s.int()),
  updatedAt: s.optional(s.int()),
  updatedBy: s.optional(s.lazy(() => userReferenceDefinitionSchema)),
  tags: s.optional(s.array(s.string())),
  interactions: s.optional(s.lazy(() => documentInteractionsDefinitionSchema)),
  status: s.optional(s.string()),
  additionalUrls: s.optional(s.array(s.string())),
  nativeAppUrl: s.optional(s.string()),
  comments: s.optional(s.array(s.lazy(() => commentDefinitionSchema))),
  customProperties: s.optional(s.array(s.lazy(() => customPropertySchema))),
  _keysMap: {
    viewUrl: "viewURL",
  },
});
