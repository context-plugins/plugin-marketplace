import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreviewStreamErrorSchema,
  type PlatformSkillSourcePreviewStreamError,
} from "./platform-skill-source-preview-stream-error.js";

export type PlatformSkillSourcePreviewStreamErrorServerSentEvent = {
  id?: string;
  /** @default "ERROR" */
  event?: "ERROR";
  /**
   * Terminal failure event carrying the failure as a problem detail. Most GitHub authorization
   * failures return HTTP 422 before the stream opens. If authorization fails after the stream
   * opens, `error.code` is `tools_unauthorized` and `authentication_suggestions` is present.
   */
  data: PlatformSkillSourcePreviewStreamError;
};

export const platformSkillSourcePreviewStreamErrorServerSentEventSchema: Schema<PlatformSkillSourcePreviewStreamErrorServerSentEvent> =
  s.object<PlatformSkillSourcePreviewStreamErrorServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("ERROR"), "ERROR"),
    data: platformSkillSourcePreviewStreamErrorSchema,
  });
