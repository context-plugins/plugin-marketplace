import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskCompactSchema, type TaskCompact } from "./task-compact.js";

export type AttachmentResponse = {
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
  /** The time at which this resource was created. */
  createdAt?: Date;
  /**
   * The URL containing the content of the attachment. *Note:* May be null if the attachment is
   * hosted by [Box](https://www.box.com/) and will be null if the attachment is a Video Message
   * hosted by [Vimeo](https://vimeo.com/). If present, this URL may only be valid for two minutes
   * from the time of retrieval. You should avoid persisting this URL somewhere and just refresh it
   * on demand to ensure you do not keep stale URLs.
   */
  downloadUrl?: string | null;
  permanentUrl?: string | null;
  /**
   * The service hosting the attachment. Valid values are `asana`, `dropbox`, `gdrive`, `box`, and
   * `vimeo`.
   */
  host?: string;
  parent?: TaskCompact;
  /** The size of the attachment in bytes. Only present when the `resource_subtype` is `asana`. */
  size?: number;
  /**
   * The URL where the attachment can be viewed, which may be friendlier to users in a browser than
   * just directing them to a raw file. May be null if no view URL exists for the service.
   */
  viewUrl?: string | null;
  /**
   * Whether the attachment is connected to the app making the request for the purposes of showing
   * an app components widget. Only present when the `resource_subtype` is `external` or `gdrive`.
   */
  connectedToApp?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const attachmentResponseProperties: s.Shape<AttachmentResponse> = {
  gid: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  name: s.optional(s.string()),
  resourceSubtype: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  downloadUrl: s.optionalNullable(s.string()),
  permanentUrl: s.optionalNullable(s.string()),
  host: s.optional(s.string()),
  parent: s.optional(s.lazy(() => taskCompactSchema)),
  size: s.optional(s.int()),
  viewUrl: s.optionalNullable(s.string()),
  connectedToApp: s.optional(s.boolean()),
  _keysMap: {
    resourceType: "resource_type",
    resourceSubtype: "resource_subtype",
    createdAt: "created_at",
    downloadUrl: "download_url",
    permanentUrl: "permanent_url",
    viewUrl: "view_url",
    connectedToApp: "connected_to_app",
  },
};

export const attachmentResponseInternalSchema: Schema<AttachmentResponse> = s.object<AttachmentResponse>(
  attachmentResponseProperties,
  { additionalProperties: s.json() },
);

export const attachmentResponseSchema: Schema<AttachmentResponse> = s.lazySchema(() =>
  s.object<AttachmentResponse>(
    {
      ...attachmentResponseProperties,
      downloadUrl: s.optionalNullable(s.string().check(s.url())),
      permanentUrl: s.optionalNullable(s.string().check(s.url())),
      viewUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
