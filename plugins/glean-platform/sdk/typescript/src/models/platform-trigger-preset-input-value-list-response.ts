import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformTriggerPresetInputValueSchema,
  type PlatformTriggerPresetInputValue,
} from "./platform-trigger-preset-input-value.js";

export type PlatformTriggerPresetInputValueListResponse = {
  /** The bounded set of selectable values matching the query. */
  results: PlatformTriggerPresetInputValue[];
  /**
   * Whether additional matches were omitted. When true, refine `query` to narrow the result set.
   */
  isTruncated: boolean;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformTriggerPresetInputValueListResponseSchema: Schema<PlatformTriggerPresetInputValueListResponse> =
  s.object<PlatformTriggerPresetInputValueListResponse>({
    results: s.array(s.lazy(() => platformTriggerPresetInputValueSchema)),
    isTruncated: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      isTruncated: "is_truncated",
      requestId: "request_id",
    },
  });
