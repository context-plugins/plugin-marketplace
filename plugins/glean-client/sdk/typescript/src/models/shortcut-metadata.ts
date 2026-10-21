import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { personSchema, type Person } from "./person.js";

export type ShortcutMetadata = {
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
};

export const shortcutMetadataSchema: Schema<ShortcutMetadata> = s.object<ShortcutMetadata>({
  createdBy: s.optional(s.lazy(() => personSchema)),
  createTime: s.optional(s.dateTime()),
  updatedBy: s.optional(s.lazy(() => personSchema)),
  updateTime: s.optional(s.dateTime()),
  destinationDocument: s.optional(s.lazy(() => documentSchema)),
  intermediateUrl: s.optional(s.string()),
  viewPrefix: s.optional(s.string()),
  isExternal: s.optional(s.boolean()),
  editUrl: s.optional(s.string()),
});
