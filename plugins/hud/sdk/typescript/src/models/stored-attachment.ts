import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  StatusHudPlatformTasksApi,
  statusHudPlatformTasksApiSchema,
} from "./status-hud-platform-tasks-api.js";
import { archivedAtSchema, type ArchivedAt } from "./unions/archived-at.js";
import { contentTypeSchema, type ContentType } from "./unions/content-type.js";
import { errorSchema, type Error } from "./unions/error.js";
import { sizeSchema, type Size } from "./unions/size.js";
import { storageUrlSchema, type StorageUrl } from "./unions/storage-url.js";

/**
 * One attachment as persisted in the owning entity's JSONB list.
 *
 * ``upload_url`` is the staged upload locator the uploader attached. The archive worker copies it
 * under the entity's own prefix and records the outcome: ``status='archived'`` with
 * ``storage_url``/``size``, or ``status='failed'`` with ``error``.
 */
export type StoredAttachment = {
  name: string;
  uploadUrl: string;
  size?: Size;
  contentType?: ContentType;
  /** @default StatusHudPlatformTasksApi.Staged */
  status?: StatusHudPlatformTasksApi;
  storageUrl?: StorageUrl;
  error?: Error;
  archivedAt?: ArchivedAt;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storedAttachmentSchema: Schema<StoredAttachment> = s.object<StoredAttachment>(
  {
    name: s.string(),
    uploadUrl: s.string(),
    size: s.optional(s.lazy(() => sizeSchema)),
    contentType: s.optional(s.lazy(() => contentTypeSchema)),
    status: s.defaulted(statusHudPlatformTasksApiSchema, StatusHudPlatformTasksApi.Staged),
    storageUrl: s.optional(s.lazy(() => storageUrlSchema)),
    error: s.optional(s.lazy(() => errorSchema)),
    archivedAt: s.optional(s.lazy(() => archivedAtSchema)),
    _keysMap: {
      uploadUrl: "upload_url",
      contentType: "content_type",
      storageUrl: "storage_url",
      archivedAt: "archived_at",
    },
  },
  { additionalProperties: s.json() },
);
