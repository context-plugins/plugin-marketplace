import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatMessageSchema, type ChatMessage } from "./chat-message.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { personSchema, type Person } from "./person.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

/** A historical representation of a series of chat messages a user had with Glean Assistant. */
export type Chat = {
  /** The chat messages within a Chat. */
  messages?: ChatMessage[];
  /** A list of roles for this Chat. */
  roles?: UserRoleSpecification[];
  /** The opaque id of the Chat. */
  id?: string;
  /** Server Unix timestamp of the creation time (in seconds since epoch UTC). */
  createTime?: number;
  createdBy?: Person;
  /** Server Unix timestamp of the update time (in seconds since epoch UTC). */
  updateTime?: number;
  /** The name of the Chat. */
  name?: string;
  /** The ID of the AI App that this Chat is associated to. */
  applicationId?: string;
  /** The display name of the AI App that this Chat is associated to. */
  applicationName?: string;
  /** Defines how to render an icon */
  icon?: IconConfig;
  permissions?: ObjectPermissions;
};

export const chatSchema: Schema<Chat> = s.object<Chat>({
  messages: s.optional(s.array(s.lazy(() => chatMessageSchema))),
  roles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  id: s.optional(s.string()),
  createTime: s.optional(s.int()),
  createdBy: s.optional(s.lazy(() => personSchema)),
  updateTime: s.optional(s.int()),
  name: s.optional(s.string()),
  applicationId: s.optional(s.string()),
  applicationName: s.optional(s.string()),
  icon: s.optional(s.lazy(() => iconConfigSchema)),
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
});
