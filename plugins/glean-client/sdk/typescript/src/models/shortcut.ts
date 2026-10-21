import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { favoriteInfoSchema, type FavoriteInfo } from "./favorite-info.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { personSchema, type Person } from "./person.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

export type Shortcut = {
  /** The opaque id of the user generated content. */
  id?: number;
  /** Link text following go/ prefix as entered by the user. */
  inputAlias: string;
  /** Destination URL for the shortcut. */
  destinationUrl?: string;
  /** Glean Document ID for the URL, if known. */
  destinationDocumentId?: string;
  /** A short, plain text blurb to help people understand the intent of the shortcut. */
  description?: string;
  /**
   * Whether this shortcut is unlisted or not. Unlisted shortcuts are visible to author + admins
   * only.
   */
  unlisted?: boolean;
  /**
   * For variable shortcuts, contains the URL template; note, `destinationUrl` contains default URL.
   */
  urlTemplate?: string;
  /** A list of user roles added for the Shortcut. */
  addedRoles?: UserRoleSpecification[];
  /** A list of user roles removed for the Shortcut. */
  removedRoles?: UserRoleSpecification[];
  permissions?: ObjectPermissions;
  createdBy?: Person;
  /** The time the shortcut was created in ISO format (ISO 8601). */
  createTime?: Date;
  updatedBy?: Person;
  /** The time the shortcut was updated in ISO format (ISO 8601). */
  updateTime?: Date;
  destinationDocument?: Document;
  /**
   * The URL from which the user is then redirected to the destination URL. Full replacement for
   * https://go/<inputAlias>.
   */
  intermediateUrl?: string;
  /**
   * The part of the shortcut preceding the input alias when used for showing shortcuts to users.
   * Should end with "/". e.g. "go/" for native shortcuts.
   */
  viewPrefix?: string;
  /** Indicates whether a shortcut is native or external. */
  isExternal?: boolean;
  /** The URL using which the user can access the edit page of the shortcut. */
  editUrl?: string;
  /** canonical link text following go/ prefix where hyphen/underscore is removed. */
  alias?: string;
  /** Title for the Go Link */
  title?: string;
  /** A list of user roles for the Go Link. */
  roles?: UserRoleSpecification[];
  favoriteInfo?: FavoriteInfo;
};

export const shortcutSchema: Schema<Shortcut> = s.object<Shortcut>({
  id: s.optional(s.int()),
  inputAlias: s.string(),
  destinationUrl: s.optional(s.string()),
  destinationDocumentId: s.optional(s.string()),
  description: s.optional(s.string()),
  unlisted: s.optional(s.boolean()),
  urlTemplate: s.optional(s.string()),
  addedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  removedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  createdBy: s.optional(s.lazy(() => personSchema)),
  createTime: s.optional(s.dateTime()),
  updatedBy: s.optional(s.lazy(() => personSchema)),
  updateTime: s.optional(s.dateTime()),
  destinationDocument: s.optional(s.lazy(() => documentSchema)),
  intermediateUrl: s.optional(s.string()),
  viewPrefix: s.optional(s.string()),
  isExternal: s.optional(s.boolean()),
  editUrl: s.optional(s.string()),
  alias: s.optional(s.string()),
  title: s.optional(s.string()),
  roles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  favoriteInfo: s.optional(s.lazy(() => favoriteInfoSchema)),
});
