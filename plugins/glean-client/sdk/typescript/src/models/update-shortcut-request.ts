import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

export type UpdateShortcutRequest = {
  /** The opaque id of the user generated content. */
  id: number;
  /** Link text following go/ prefix as entered by the user. */
  inputAlias?: string;
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
};

export const updateShortcutRequestSchema: Schema<UpdateShortcutRequest> = s.object<UpdateShortcutRequest>({
  id: s.int(),
  inputAlias: s.optional(s.string()),
  destinationUrl: s.optional(s.string()),
  destinationDocumentId: s.optional(s.string()),
  description: s.optional(s.string()),
  unlisted: s.optional(s.boolean()),
  urlTemplate: s.optional(s.string()),
  addedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  removedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
});
