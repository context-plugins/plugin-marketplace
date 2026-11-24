import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { privacyLevelOptionSchema, type PrivacyLevelOption } from "./privacy-level-option.js";

export type ApiV1MiscTiktokPostSettingsResponse = {
  /**
   * Values the account accepts for `privacy`. Public accounts: PUBLIC_TO_EVERYONE,
   * MUTUAL_FOLLOW_FRIENDS, SELF_ONLY. Private accounts: FOLLOWER_OF_CREATOR, MUTUAL_FOLLOW_FRIENDS,
   * SELF_ONLY.
   */
  privacyLevelOptions: PrivacyLevelOption[];
  /**
   * If true, comments can't be enabled (the creator allows comments from no one), so send
   * `disableComments: true`.
   */
  commentDisabled: boolean;
  /**
   * If true, duets can't be enabled (duets set to "Only you", or a private account), so send
   * `disableDuet: true`.
   */
  duetDisabled: boolean;
  /**
   * If true, stitches can't be enabled (stitches set to "Only you", or a private account), so send
   * `disableStitch: true`.
   */
  stitchDisabled: boolean;
  /** Longest video, in seconds, this account can publish. Longer videos fail at publish time. */
  maxVideoPostDurationSec?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscTiktokPostSettingsResponseSchema: Schema<ApiV1MiscTiktokPostSettingsResponse> =
  s.object<ApiV1MiscTiktokPostSettingsResponse>(
    {
      privacyLevelOptions: s.array(s.lazy(() => privacyLevelOptionSchema)),
      commentDisabled: s.boolean(),
      duetDisabled: s.boolean(),
      stitchDisabled: s.boolean(),
      maxVideoPostDurationSec: s.optionalNullable(s.float64()),
    },
    { additionalProperties: s.json() },
  );
