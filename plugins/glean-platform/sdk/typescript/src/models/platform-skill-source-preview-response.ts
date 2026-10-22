import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreviewFailureSchema,
  type PlatformSkillSourcePreviewFailure,
} from "./platform-skill-source-preview-failure.js";
import {
  platformSkillSourcePreviewSchema,
  type PlatformSkillSourcePreview,
} from "./platform-skill-source-preview.js";

export type PlatformSkillSourcePreviewResponse = {
  /** Valid skills discovered at the source URL. */
  skills: PlatformSkillSourcePreview[];
  /** Discovered entries that could not be included in the preview. */
  failures: PlatformSkillSourcePreviewFailure[];
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillSourcePreviewResponseSchema: Schema<PlatformSkillSourcePreviewResponse> =
  s.object<PlatformSkillSourcePreviewResponse>({
    skills: s.array(s.lazy(() => platformSkillSourcePreviewSchema)),
    failures: s.array(s.lazy(() => platformSkillSourcePreviewFailureSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
