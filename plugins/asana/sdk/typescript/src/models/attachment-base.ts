import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AttachmentBase = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the file. */
  name?: string;
  /**
   * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `onedrive`,
   * `box`, `vimeo`, and `external`.
   */
  resourceSubtype?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentBaseSchema: Schema<AttachmentBase> = s.object<AttachmentBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    resourceSubtype: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
      resourceSubtype: "resource_subtype",
    },
  },
  { additionalProperties: s.json() },
);
