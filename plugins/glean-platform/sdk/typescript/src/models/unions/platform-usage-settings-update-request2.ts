import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  platformUsageSettingsUpdateRequestSchema,
  type PlatformUsageSettingsUpdateRequest,
} from "../platform-usage-settings-update-request.js";
import {
  platformUsageSettingsUpdateRequest1Schema,
  type PlatformUsageSettingsUpdateRequest1,
} from "../platform-usage-settings-update-request1.js";

/** Request body for updating workspace-wide usage settings. */
export type PlatformUsageSettingsUpdateRequest2 =
  | PlatformUsageSettingsUpdateRequest
  | PlatformUsageSettingsUpdateRequest1;

export const platformUsageSettingsUpdateRequest2Schema: Schema<PlatformUsageSettingsUpdateRequest2> =
  s.of<PlatformUsageSettingsUpdateRequest2>(
    s.union([
      s.lazy(() => platformUsageSettingsUpdateRequestSchema),
      s.lazy(() => platformUsageSettingsUpdateRequest1Schema),
    ]),
  );
