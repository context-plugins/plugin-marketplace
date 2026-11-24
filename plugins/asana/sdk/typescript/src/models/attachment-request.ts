import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceSubtype1Schema, type ResourceSubtype1 } from "./resource-subtype1.js";

export type AttachmentRequest = {
  /**
   * The type of the attachment. Must be one of the given values. If not specified, a file
   * attachment of type `asana` will be assumed. Note that if the value of `resource_subtype` is
   * `external`, a `parent`, `name`, and `url` must also be provided.
   */
  resourceSubtype?: ResourceSubtype1;
  /** Required for `asana` attachments. */
  file?: Uint8Array;
  /** Required identifier of the parent task, project, or project_brief, as a string. */
  parent?: string;
  /**
   * The URL of the external resource being attached. Required for attachments of type `external`.
   */
  url?: string;
  /**
   * The name of the external resource being attached. Required for attachments of type `external`.
   */
  name?: string;
  /**
   * *Optional*. Only relevant for external attachments with a parent task. A boolean indicating
   * whether the current app should be connected with the attachment for the purposes of showing an
   * app components widget. Requires the app to have been added to a project the parent task is in.
   */
  connectToApp?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentRequestSchema: Schema<AttachmentRequest> = s.object<AttachmentRequest>(
  {
    resourceSubtype: s.optional(s.lazy(() => resourceSubtype1Schema)),
    file: s.optional(s.bytes()),
    parent: s.optional(s.string()),
    url: s.optional(s.string()),
    name: s.optional(s.string()),
    connectToApp: s.optional(s.boolean()),
    _keysMap: {
      resourceSubtype: "resource_subtype",
      connectToApp: "connect_to_app",
    },
  },
  { additionalProperties: s.json() },
);
