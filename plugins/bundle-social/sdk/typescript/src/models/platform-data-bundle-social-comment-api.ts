import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayStateSchema, type DisplayState } from "./display-state.js";
import { originSchema, type Origin } from "./origin.js";
import { reactionTypeSchema, type ReactionType } from "./reaction-type.js";
import {
  platformDataAdditionalFieldsSchema,
  type PlatformDataAdditionalFields,
} from "./unions/platform-data-additional-fields.js";

export type PlatformDataBundleSocialCommentApi = {
  canDelete?: boolean | null;
  canHide?: boolean | null;
  canLike?: boolean | null;
  canModerate?: boolean | null;
  hidden?: boolean | null;
  likedByMe?: boolean | null;
  likedByAutomation?: boolean | null;
  reactionsCount?: number | null;
  reactionType?: ReactionType | null;
  owner?: boolean | null;
  hideStatus?: string | null;
  moderationStatus?: string | null;
  approvalStatus?: string | null;
  status?: string | null;
  attachmentType?: string | null;
  attachmentUrl?: string | null;
  cid?: string | null;
  origin?: Origin | null;
  source?: string | null;
  mediaProductType?: string | null;
  bundleCommentId?: string | null;
  displayState?: DisplayState | null;
  disabledReason?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, PlatformDataAdditionalFields>;
};

export const platformDataBundleSocialCommentApiSchema: Schema<PlatformDataBundleSocialCommentApi> =
  s.object<PlatformDataBundleSocialCommentApi>(
    {
      canDelete: s.optionalNullable(s.boolean()),
      canHide: s.optionalNullable(s.boolean()),
      canLike: s.optionalNullable(s.boolean()),
      canModerate: s.optionalNullable(s.boolean()),
      hidden: s.optionalNullable(s.boolean()),
      likedByMe: s.optionalNullable(s.boolean()),
      likedByAutomation: s.optionalNullable(s.boolean()),
      reactionsCount: s.optionalNullable(s.float64()),
      reactionType: s.optionalNullable(s.lazy(() => reactionTypeSchema)),
      owner: s.optionalNullable(s.boolean()),
      hideStatus: s.optionalNullable(s.string()),
      moderationStatus: s.optionalNullable(s.string()),
      approvalStatus: s.optionalNullable(s.string()),
      status: s.optionalNullable(s.string()),
      attachmentType: s.optionalNullable(s.string()),
      attachmentUrl: s.optionalNullable(s.string()),
      cid: s.optionalNullable(s.string()),
      origin: s.optionalNullable(s.lazy(() => originSchema)),
      source: s.optionalNullable(s.string()),
      mediaProductType: s.optionalNullable(s.string()),
      bundleCommentId: s.optionalNullable(s.string()),
      displayState: s.optionalNullable(s.lazy(() => displayStateSchema)),
      disabledReason: s.optionalNullable(s.string()),
    },
    { additionalProperties: platformDataAdditionalFieldsSchema },
  );
