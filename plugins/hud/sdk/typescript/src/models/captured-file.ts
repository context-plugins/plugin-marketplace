import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  status1HudPlatformQaAgentsApiSchema,
  type Status1HudPlatformQaAgentsApi,
} from "./status1-hud-platform-qa-agents-api.js";
import { contentHashSchema, type ContentHash } from "./unions/content-hash.js";
import { downloadUrlSchema, type DownloadUrl } from "./unions/download-url.js";
import { urlSchema, type Url } from "./unions/url.js";

/** One changed workspace file preserved as a downloadable telemetry artifact. */
export type CapturedFile = {
  path: string;
  status: Status1HudPlatformQaAgentsApi;
  size: number;
  contentHash?: ContentHash;
  /** @default "application/octet-stream" */
  contentType?: string;
  url?: Url;
  downloadUrl?: DownloadUrl;
};

export const capturedFileSchema: Schema<CapturedFile> = s.object<CapturedFile>({
  path: s.string(),
  status: status1HudPlatformQaAgentsApiSchema,
  size: s.int(),
  contentHash: s.optional(s.lazy(() => contentHashSchema)),
  contentType: s.defaulted(s.string(), "application/octet-stream"),
  url: s.optional(s.lazy(() => urlSchema)),
  downloadUrl: s.optional(s.lazy(() => downloadUrlSchema)),
  _keysMap: {
    contentHash: "content_hash",
    contentType: "content_type",
    downloadUrl: "download_url",
  },
});
