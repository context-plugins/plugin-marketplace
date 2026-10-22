import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IndexingShortcut = {
  /**
   * Whether this shortcut is unlisted or not. Unlisted shortcuts are visible to author and admins
   * only.
   */
  unlisted?: boolean;
  /**
   * For variable shortcuts, contains the URL template; note, `destinationUrl` contains default URL.
   */
  urlTemplate?: string;
  /**
   * link text following the viewPrefix as entered by the user. For example, if the view prefix is
   * `go/` and the shortened URL is `go/abc`, then `abc` is the inputAlias.
   */
  inputAlias: string;
  /** A short, plain text blurb to help people understand the intent of the shortcut. */
  description?: string;
  /** destination URL for the shortcut. */
  destinationUrl: string;
  /** Email of the user who created this shortcut. */
  createdBy: string;
  /** The time the shortcut was created in epoch seconds. */
  createTime?: number;
  /** Email of the user who last updated this shortcut. */
  updatedBy?: string;
  /** The time the shortcut was updated in epoch seconds. */
  updateTime?: number;
};

export const indexingShortcutSchema: Schema<IndexingShortcut> = s.object<IndexingShortcut>({
  unlisted: s.optional(s.boolean()),
  urlTemplate: s.optional(s.string()),
  inputAlias: s.string(),
  description: s.optional(s.string()),
  destinationUrl: s.string(),
  createdBy: s.string(),
  createTime: s.optional(s.int()),
  updatedBy: s.optional(s.string()),
  updateTime: s.optional(s.int()),
});
