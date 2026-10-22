import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionSchema, type Collection } from "./collection.js";
import { countInfoSchema, type CountInfo } from "./count-info.js";
import { customDataValueSchema, type CustomDataValue } from "./custom-data-value.js";
import { documentInteractionsSchema, type DocumentInteractions } from "./document-interactions.js";
import { documentVisibilitySchema, type DocumentVisibility } from "./document-visibility.js";
import { documentSchema, type Document } from "./document.js";
import { indexStatusSchema, type IndexStatus } from "./index-status.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { personSchema, type Person } from "./person.js";
import { pinDocumentSchema, type PinDocument } from "./pin-document.js";
import { shortcutSchema, type Shortcut } from "./shortcut.js";
import { thumbnailSchema, type Thumbnail } from "./thumbnail.js";
import { verificationSchema, type Verification } from "./verification.js";
import { viewerInfoSchema, type ViewerInfo } from "./viewer-info.js";

export type DocumentMetadata = {
  datasource?: string;
  /** The datasource instance from which the document was extracted. */
  datasourceInstance?: string;
  /**
   * The type of the result. Interpretation is specific to each datasource. (e.g. for Jira issues,
   * this is the issue type such as Bug or Feature Request).
   */
  objectType?: string;
  /**
   * The name of the container (higher level parent, not direct parent) of the result.
   * Interpretation is specific to each datasource (e.g. Channels for Slack, Project for Jira). cf.
   * parentId
   */
  container?: string;
  /** The Glean Document ID of the container. Uniquely identifies the container. */
  containerId?: string;
  /**
   * The Glean Document ID of the super container. Super container represents a broader abstraction
   * that contains many containers. For example, whereas container might refer to a folder, super
   * container would refer to a drive.
   */
  superContainerId?: string;
  /**
   * The id of the direct parent of the result. Interpretation is specific to each datasource (e.g.
   * parent issue for Jira). cf. container
   */
  parentId?: string;
  mimeType?: string;
  /** The index-wide unique identifier. */
  documentId?: string;
  /**
   * A unique identifier used to represent the document in any logging or feedback requests in place
   * of documentId.
   */
  loggingId?: string;
  /** Hash of the Glean Document ID. */
  documentIdHash?: string;
  createTime?: Date;
  updateTime?: Date;
  author?: Person;
  owner?: Person;
  /** A list of people mentioned in the document. */
  mentionedPeople?: Person[];
  /** The level of visibility of the document as understood by our system. */
  visibility?: DocumentVisibility;
  /**
   * A list of components this result is associated with. Interpretation is specific to each
   * datasource. (e.g. for Jira issues, these are
   * [components](https://confluence.atlassian.com/jirasoftwarecloud/organizing-work-with-components-764478279.html).)
   */
  components?: string[];
  /**
   * The status or disposition of the result. Interpretation is specific to each datasource. (e.g.
   * for Jira issues, this is the issue status such as Done, In Progress or Will Not Fix).
   */
  status?: string;
  /**
   * The status category of the result. Meant to be more general than status. Interpretation is
   * specific to each datasource.
   */
  statusCategory?: string;
  /** A list of stars associated with this result. "Pin" is an older name. */
  pins?: PinDocument[];
  /** The document priority. Interpretation is datasource specific. */
  priority?: string;
  assignedTo?: Person;
  updatedBy?: Person;
  /** A list of tags for the document. Interpretation is datasource specific. */
  labels?: string[];
  /** A list of collections that the document belongs to. */
  collections?: Collection[];
  /**
   * The user-visible datasource specific id (e.g. Salesforce case number for example, GitHub PR
   * number).
   */
  datasourceId?: string;
  interactions?: DocumentInteractions;
  verification?: Verification;
  viewerInfo?: ViewerInfo;
  permissions?: ObjectPermissions;
  visitCount?: CountInfo;
  /** A list of shortcuts of which destination URL is for the document. */
  shortcuts?: Shortcut[];
  /** For file datasources like onedrive/github etc this has the path to the file */
  path?: string;
  /** Custom fields specific to individual datasources */
  customData?: Record<string, CustomDataValue>;
  /** The document's document_category(.proto). */
  documentCategory?: string;
  contactPerson?: Person;
  thumbnail?: Thumbnail;
  indexStatus?: IndexStatus;
  /**
   * A list of documents that are ancestors of this document in the hierarchy of the document's
   * datasource, for example parent folders or containers. Ancestors can be of different types and
   * some may not be indexed. Higher level ancestors appear earlier in the list.
   */
  ancestors?: Document[];
};

export const documentMetadataSchema: Schema<DocumentMetadata> = s.object<DocumentMetadata>({
  datasource: s.optional(s.string()),
  datasourceInstance: s.optional(s.string()),
  objectType: s.optional(s.string()),
  container: s.optional(s.string()),
  containerId: s.optional(s.string()),
  superContainerId: s.optional(s.string()),
  parentId: s.optional(s.string()),
  mimeType: s.optional(s.string()),
  documentId: s.optional(s.string()),
  loggingId: s.optional(s.string()),
  documentIdHash: s.optional(s.string()),
  createTime: s.optional(s.dateTime()),
  updateTime: s.optional(s.dateTime()),
  author: s.optional(s.lazy(() => personSchema)),
  owner: s.optional(s.lazy(() => personSchema)),
  mentionedPeople: s.optional(s.array(s.lazy(() => personSchema))),
  visibility: s.optional(s.lazy(() => documentVisibilitySchema)),
  components: s.optional(s.array(s.string())),
  status: s.optional(s.string()),
  statusCategory: s.optional(s.string()),
  pins: s.optional(s.array(s.lazy(() => pinDocumentSchema))),
  priority: s.optional(s.string()),
  assignedTo: s.optional(s.lazy(() => personSchema)),
  updatedBy: s.optional(s.lazy(() => personSchema)),
  labels: s.optional(s.array(s.string())),
  collections: s.optional(s.array(s.lazy(() => collectionSchema))),
  datasourceId: s.optional(s.string()),
  interactions: s.optional(s.lazy(() => documentInteractionsSchema)),
  verification: s.optional(s.lazy(() => verificationSchema)),
  viewerInfo: s.optional(s.lazy(() => viewerInfoSchema)),
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  visitCount: s.optional(s.lazy(() => countInfoSchema)),
  shortcuts: s.optional(s.array(s.lazy(() => shortcutSchema))),
  path: s.optional(s.string()),
  customData: s.optional(
    s.record(
      s.string(),
      s.lazy(() => customDataValueSchema),
    ),
  ),
  documentCategory: s.optional(s.string()),
  contactPerson: s.optional(s.lazy(() => personSchema)),
  thumbnail: s.optional(s.lazy(() => thumbnailSchema)),
  indexStatus: s.optional(s.lazy(() => indexStatusSchema)),
  ancestors: s.optional(s.array(s.lazy(() => documentSchema))),
});
