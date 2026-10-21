import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconConfigSchema, type IconConfig } from "./icon-config.js";
import { personSchema, type Person } from "./person.js";

/**
 * Metadata of a Chat a user had with Glean Assistant. This contains no actual conversational
 * content.
 */
export type ChatMetadata = {
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
};

export const chatMetadataSchema: Schema<ChatMetadata> = s.object<ChatMetadata>({
  id: s.optional(s.string()),
  createTime: s.optional(s.int()),
  createdBy: s.optional(s.lazy(() => personSchema)),
  updateTime: s.optional(s.int()),
  name: s.optional(s.string()),
  applicationId: s.optional(s.string()),
  applicationName: s.optional(s.string()),
  icon: s.optional(s.lazy(() => iconConfigSchema)),
});
